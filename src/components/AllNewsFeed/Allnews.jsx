import React from "react";
import Newscard from "../News/Newscard";
import Footer from "../Footer/Footer";

const Allnews = ({ articles }) => {
  return (
    <>
      <Newscard isHome={false} />
      <Footer />
    </>
  );
};

export default Allnews;
