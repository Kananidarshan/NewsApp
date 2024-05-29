import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";
import AOS from "aos";
import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import Allnews from "./pages/Allnews";
import "./global.css"; // Import the global CSS file

import {
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/Allnews" element={<Allnews />} />
    </Route>
  )
);

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

  return <RouterProvider router={router} />;
}

export default App;
