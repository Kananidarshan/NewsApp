import React from "react";
import Testimonal from "../components/testimonials/Testimonial";
import NewsHome from "../components/AllNewsFeed/NewsHome";

const Homepage = () => {
  return (
    <>
      <NewsHome isHome={true} />
      <Testimonal />
    </>
  );
};

export default Homepage;
