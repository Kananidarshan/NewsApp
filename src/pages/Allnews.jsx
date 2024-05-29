import React from "react";
import Newscard from "../components/News/Newscard";
import Footer from "../components/Footer/Footer";

const Allnews = ({ articles }) => {
  return (
    <>
      <Newscard isHome={false} />
      <Footer />
    </>
  );
};

export default Allnews;
