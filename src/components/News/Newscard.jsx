import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../style.css";
import { useNavigate } from "react-router-dom";

const Newscard = ({
  isHome = true,
  category = "general",
  Title = "GENRAL NEWS",
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const BaseUrl = "http://newsapi.org/v2/top-headlines";
      const ApiKey = "6944ef81cc0a46649c3628617b7c9808";
      const apiUrl = isHome
        ? `${BaseUrl}?country=in&category=${category}&pageSize=3&apiKey=${ApiKey}`
        : `${BaseUrl}?country=in&category=${category}&pageSize=9&apiKey=${ApiKey}`;

      try {
        const response = await axios.get(apiUrl);
        setArticles(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the data:", error);
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, [isHome]);

  if (loading) {
    return (
      <div className="bg-gray-700 text-white text-center py-5 text-xl font-extrabold">
        Loading...
      </div>
    );
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // for Title of news card
  function getFourWords(title) {
    const words = title.split(" ");
    return words.slice(0, 4).join(" ");
  }

  const handleButtonClick = () => {
    navigate("/Allnews");
  };

  return (
    <div className="container shadow-md">
      <div className="flex flex-col pb-5 mt-5">
        <h1
          data-aos="zoom-in"
          className="text-center text-black text-4xl font-bold mt-2 font-Reddit"
        >
          {Title}
        </h1>
        <div
          data-aos="fade-up"
          className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2"
        >
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex flex-col group h-[460px] w-[450px] max-w-[17rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto transition-all duration-200 hover:scale-110 hover:bg-yellow-500"
            >
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <img
                  className="rounded-t-lg object-cover h-[200px] w-full"
                  src={article.urlToImage}
                  alt={article.title}
                  onError={(e) => {
                    e.target.src = "fallback-image-url";
                  }}
                />
              </a>
              <div className="p-5 flex flex-col h-full justify-between">
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white group-hover:text-black">
                      {getFourWords(article.title)}
                    </h5>
                  </a>
                  <p className="group-hover:text-black truncate-two-lines mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {article.description}
                  </p>
                </div>
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more{" "}
                    <span className="pl-2 text-lg font-bold">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:ring-2 focus:ring-blue-500 m-auto"
            onClick={handleButtonClick}
          >
            View All News
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newscard;
