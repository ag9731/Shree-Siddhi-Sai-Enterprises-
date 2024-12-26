import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
// import footerLogo from "../../assets/logo-removebg-preview.png"
import {
  faEnvelopeOpen,
  faFileAlt,
  faFileArchive,
  faMapMarkedAlt,
  faMapMarker,
  faMobile,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo (2).png"
import "./Footer.css"
import AboutDropdown from "../Nav/AboutDropdpwn/AboutDropDown";
const Footer = () => {
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: "0" });
  };
  return (
    <div className="footer bg-zinc-950 py-8">
      {/* Newslatter and Columns */}
      <div
        className=" bg-black bg-opacity-50 absolute top-0 left-0 p-4
      h-full "
      >
        {/* Footer Columns */}
        <div className="footer-columns p-10">
          <div className="flex flex-col lg:flex-row md:flex-row ">
            {/* Column */}
            <div className="w-full sm:w-1/3 mb-8 sm:mb-0 text-left">
              <div className="-my-12 text-white">
                <div className="font-bold flex flex-row items-center justify-center">
                  <img src={logo} className="w-[150px] h-[150px] py-2" />
                </div>
                <p className="text-justify">
                  Established in 1994, Shree Chethan Services has been providing
                  our clients with excellent services in Karnataka and across
                  India.
                </p>
                <div className="social-icons mt-4">
                  <ul className="flex space-x-3 justify-center">
                    <li>
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faTwitter}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                    <li>
                      <FontAwesomeIcon
                        icon={faWhatsapp}
                        className="text-white text-3xl
                    hover:text-amber-400 transition ease-in-out duration-300"
                      />
                    </li>
                  </ul>
                </div>
                <br />
                <div className="address-list mt-2">
                  <ul className="flex justify-center text-justify items-center">
                    <li className="flex items-center -my-4 ">
                      <FontAwesomeIcon
                        icon={faEnvelopeOpen}
                        className="text-amber-400 
                   text-xl p-4"
                      />
                      <a
                        href="mailto:admissions@hillsideacademy.in"
                        className="text-white"
                      >
                        chethanaservices@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Column */}
            {/* Column */}
            <div className="w-full sm:w-1/3 my-8 lg:my-0 md:my-0 mb-12 ">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold mb-4 flex justify-center">
                  QUICK LINKS
                </h3>
                <ul className="flex flex-col items-center justify-center">
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/aboutUs"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      About Us
                    </Link>
                    {/* <AboutDropdown/> */}
                  </li>
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/project"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Project
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/client"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Clientele
                    </Link>
                  </li>
                  {/* <li className="relative">
                    <Link onClick={ handleClick} to={"/services"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                     Services
                    </Link>
                  </li> */}

                  <li className="relative ">
                    <Link
                      onClick={handleClick}
                      to={"/contact"}
                      className="block mb-2 after:content-[''] after:absolute
                       after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full sm:w-1/3  lg:my-0 md:my-0 ">
              <div className="footer-c-widget h-white list-widget text-white">
                <h3 className="text-lg font-semibold text-center mb-4 mx-14">
                  SERVICES
                </h3>
                <ul className="flex flex-col items-center justify-center">
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/excavation"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Excavation Services
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/demolition"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Demolition/Dismantling Services
                    </Link>
                  </li>
                  <li className="relative">
                    <Link
                      onClick={handleClick}
                      to={"/siteprep"}
                      className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      Site Preparations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full my-6 md:my-0 sm:w-1/3 mb-8 sm:mb-0">
              <div className="footer-c-widget h-white address-list text-white">
                <h3 className="text-lg md:text-center text-center  font-semibold mb-4">
                  CONTACT US
                </h3>
                <ul className="text-left">
                  <li className="flex flex-col md:flex-row justify-center text-center md:text-justify  items-center gap-y-3 mb-4">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    53/3, Nagavarapalya Main Rd, Rajana Colony, C V Raman Nagar,
                    Bengaluru, Karnataka 560093
                  </li>
                  <hr className="border-gray-700 mb-4" />
                  <h5 className="text-md text-center  md:text-center font-semibold mb-2">
                    PHONE NO
                  </h5>
                  <li className="flex flex-col md:flex-row items-center gap-y-3 justify-center mb-4">
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    +91-9448334376
                  </li>

                  <hr className="border-gray-700 mb-4" />
                  {/* <li className="flex items-start">
                    <FontAwesomeIcon
                      icon={faFileArchive}
                      className="text-amber-400 text-xl px-4"
                    />{" "}
                    <a
                      href="privacy-policy.html"
                      className="text-white text-center"
                    >
                      Privacy Policy
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            {/* Column */}
          </div>
        </div>
      </div>
      {/* Sub Footer */}
      {/* <div className="sub-footer bg-gray-900 text-white text-center py-4">
        <p className="text-sm">Powered by INNOMATRICS TECH.</p>
      </div> */}
      {/* Sub Footer */}
    </div>
  );
};

export default Footer;
