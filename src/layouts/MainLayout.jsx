// MainLayout.js
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="main-content">{children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;
