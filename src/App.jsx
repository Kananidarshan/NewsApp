// App.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Allnews from "./components/AllNewsFeed/Allnews";
import SportNews from "./pages/SportNews";
import "./global.css"; // Import the global CSS file
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Business from "./pages/BusinessNews";
import HealthNews from "./pages/HealthNews";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/Allnews" element={<Allnews />} />
          <Route path="/SportNews" element={<SportNews />} />
          <Route path="/Business" element={<Business />} />
          <Route path="/Health" element={<HealthNews />} />

          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
