import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    appendDots: (dots) => (
      <div style={{ position: "relative", bottom: "10px" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slideToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slideToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const TestimonialData = [
    {
      id: 1,
      name: "DARSHAN",
      Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "SMIT",
      Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "AYUSH",
      Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
      img: "https://picsum.photos/103/103",
    },
    {
      id: 4,
      name: "PARTH",
      Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 5,
      name: "SHYAM",
      Text: "this e-com side is the one of the best side i see ever , it's give us many option to choose many clothing brand and shoes and many more...",
      img: "https://picsum.photos/105/105",
    },
  ];
  return (
    <>
      <div className="py-10 ">
        <div className="container shadow-md">
          {/* header section */}
          <div className="flex flex-col text-center mb-10 max-w-[600px] mx-auto gap-3">
            <p data-aos="fade-up" className="text-sm text-primary">
              What our News Reader are saying
            </p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Testimonials
            </h1>
            <p data-aos="fade-up" className="text-xl text-black font-medium ">
              See the our Most Top 10 News in all over univers.
            </p>
          </div>

          {/* Testimonial card*/}
          <div data-aos="zoom-in">
            <Slider {...settings}>
              {TestimonialData.map((data) => (
                <div className="my-3 group ">
                  <div
                    key={data.id}
                    className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  hover:bg-blue-500  dark:bg-gray-800 bg-primary/10 relative"
                  >
                    <div className="mb-4">
                      <img
                        src={data.img}
                        alt=""
                        className="rounded-full w-20 h-20"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-4 ">
                      <div className="space-y-3">
                        <p className="text-xl text-gray-500  group-hover:text-white">
                          {data.Text}
                        </p>
                        <h1
                          className="text-xl font-bold
                    text-black/80 dark:text-white group-hover:text-white"
                        >
                          {data.name}
                        </h1>
                      </div>
                    </div>
                    <p
                      className="text-black/20 text-9xl font-bold
                  font-serif absolute top-8 right-8 dark:text-white group-hover:text-white"
                    >
                      ”
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
