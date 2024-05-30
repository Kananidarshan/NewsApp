import React from "react";
import footer from "../../assets/footer.jpg";
import kd from "../../assets/AIO.png";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  const BannerImg = {
    backgroundImage: `url(${footer})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
  };
  const FooterLinks = [
    {
      title: "Sport",
      link: "/#",
    },
    {
      title: "Education",
      link: "/#about",
    },
    {
      title: "Environment",
      link: "/#contact",
    },
    {
      title: "Weather",
      link: "/#blog",
    },
  ];
  return (
    <>
      <div style={BannerImg} className="text-white">
        <div className="container pb-16 ">
          <div data-aos="zoom-in" className="grid md:grid-cols-3  pt-5">
            {/* company details  */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-4 ">
                <img
                  src={kd}
                  alt=""
                  className="max-w-[50px]  cursor-pointer "
                />
                ALL IN ONE
              </h1>
              <p className="hover:text-yellow-600">
                "Stay informed with our comprehensive, real-time news coverage.
                Bringing you the latest stories from around the globe, all in
                one place."
              </p>
            </div>
            {/* Footer Links  */}

            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 gap-5">
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                    Top News
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="">
                <div className="py-8 px-4">
                  <h1
                    className="sm:text-3xl text-xl
                 font-bold sm:text-left text-justify mb-3"
                  >
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li
                        className="cursor-pointer hover:text-yellow-500 hover:translate-x-1 duration-300 text-gray-200"
                        key={link.title}
                      >
                        <span>{link.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Social Link  */}

              <div className=" px-4 top-0">
                <div className="flex items-center gap-3 mt-10 ">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-yellow-600" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-yellow-600" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-yellow-600" />
                  </a>
                </div>

                <div className="items-center mt-6">
                  <div className="flex items-center gap-3">
                    <FaLocationArrow className="hover:text-yellow-600" />
                    <p className="hover:text-yellow-600">Ahmadabad,Gujarat</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <FaMobileAlt className="hover:text-yellow-600" />
                    <p className="hover:text-yellow-600">+91 9327613010</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
