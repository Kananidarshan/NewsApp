import React from "react";
import Footer from "../components/Footer/Footer";
import Testimonal from "../components/testimonials/Testimonial";
import NewsHome from "../components/AllNewsFeed/NewsHome";

const Homepage = () => {
  return (
    <>
      <NewsHome isHome={true} />
      <Testimonal />
      <Footer />
    </>
  );
};

export default Homepage;
