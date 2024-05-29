import React, { useState } from "react";
import { MdSearch } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import AIO from "../../assets/AIO.png";
import kd from "../../assets/007.jpg";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Business",
    link: "/Business",
  },
  {
    id: 3,
    name: "Sports",
    link: "/SportNews",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Health",
    link: "/Health",
  },
  {
    id: 2,
    name: "Business",
    link: "/Business",
  },
  {
    id: 3,
    name: "Sports",
    link: "/SportNews",
  },
];

const Navbar = () => {
  return (
    <div
      data-aos="zoom-in"
      className="shadow-md bg-white duration-200 z-40 relative"
    >
      {/* Upper navbar  */}
      <div className="mx-auto w-full h-[60px] bg-gray-700 flex items-center justify-between px-6">
        {/* Name and Logo */}
        <div className="flex items-center gap-3">
          <div className="container">
            <Link className="flex items-center gap-4" to="#">
              <img
                src={AIO}
                alt="Logo"
                className="h-[30px] w-[70px] cursor-pointer"
              />
              <span className="hidden lg:block text-white font-extrabold text-lg">
                ALL IN ONE
              </span>
            </Link>
          </div>
        </div>

        {/* Search Bar and User Profile */}
        <div className="lg:flex items-center md:flex gap-4">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="h-[40px] pl-6 pr-2 border-gray-300 group-hover:w-[300px] transition-all 
               duration-300 rounded-full border 
               focus:outline-none focus:ring-2 focus:ring-blue-500 hover:scale-105"
            />
            <MdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-4 text-xl" />
          </div>
          {/* User Profile */}
          <div className="hidden lg:block">
            <img
              src={kd}
              alt="User Profile"
              className="h-[40px] w-[40px] rounded-full border border-blue-500"
            />
          </div>
        </div>
      </div>
      {/* lower navbar  */}
      <div
        data-aos="zoom-in"
        className="flex justify-center bg-gray-500 py-2 gap-3"
      >
        <nav>
          <ul className="flex items-center font-medium">
            {Menu.map((data) => {
              return (
                <li key={data.id}>
                  <Link
                    className="inline-block text-lg text-white hover:text-yellow-500 px-4 duration-200 hover:scale-105"
                    to={data.link}
                  >
                    {data.name}
                  </Link>
                </li>
              );
            })}
            {/* simple dropdown menu */}
            <li className="group relative cursor-pointer">
              <Link
                className="flex items-center gap-2 py-2 text-white text-lg font-medium hover:text-yellow-500 hover:scale-105"
                to="#"
              >
                Trending News
                <span>
                  <FaChevronDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </Link>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-gray-700 p-2 text-white shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id} className="py-1">
                      <Link
                        className="inline-block w-full rounded-md py-2 px-1 hover:bg-gray-500 hover:text-yellow-500"
                        to={data.link}
                      >
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
