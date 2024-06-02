import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
import footerimage from "../../assets/Images/footer.png";
import footerimage1 from "../../assets/Images/footer1.png";
const Footer = () => {
  return (
    <>
      <div className=" bodys relative bg-gray-100 sm:h-56 flex flex-col gap-3 items-center justify-center">
        <img
          src={footerimage}
          alt=""
          className=" footer-image absolute sm:h-56 drop-shadow-md shadow-white  left-0"
        />
        <img
          src={footerimage1}
          alt=""
          className=" footer-image absolute sm:h-56 drop-shadow-md shadow-white  right-0"
        />
        <div className="flex items-center sm:justify-center justify-end  sm:text-3xl gap-3">
          <div className="sm:h-10 sm:w-10 bg-transparent hover:scale-105 cursor-pointer transition-all ease-in-out duration-100 rounded-full shadow-sm flex items-center sm:justify-center">
            <FaFacebook className="h-full w-full text-blue-950 " />
          </div>
          <div className="sm:h-10 sm:w-10 bg-transparent hover:scale-105 cursor-pointer transition-all ease-in-out duration-100 rounded-full shadow-sm flex items-center justify-center">
            <FaSquareXTwitter className="h-full w-full text-blue-950  rounded-full" />
          </div>
          <div className="sm:h-10 sm:w-10 bg-transparent hover:scale-105 cursor-pointer transition-all ease-in-out duration-100 rounded-full shadow-sm flex items-center justify-center">
            <FaGithub className="h-full w-full text-blue-950 " />
          </div>
          <div className="sm:h-10 sm:w-10 bg-transparent hover:scale-105 cursor-pointer transition-all ease-in-out duration-100 rounded-full shadow-sm flex items-center justify-center">
            <FaYoutube className="h-full w-full text-blue-950 " />
          </div>
          <div className="sm:h-10 sm:w-10 bg-transparent hover:scale-105 cursor-pointer transition-all ease-in-out duration-100 rounded-full shadow-sm flex items-center justify-center">
            <FaFacebook className="h-full w-full text-blue-950 " />
          </div>
        </div>
        <ul className="flex flex-row footer-icons    sm:items-center sm:gap-4  ">
          <li className="text-xs  sm:block cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
            Home
          </li>
          <li className="text-xs  sm:block hidden cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
            About
          </li>
          <li className="text-xs  sm:block hidden cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
            Portfolio
          </li>
          <li className="text-xs  sm:block cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
            Service
          </li>
          <li className="text-xs  sm:block cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
            Contact
          </li>
        </ul>
        <h1>
          Copyright &copy;2024{" "}
          <span>
            created By{" "}
            <span className="cursor-pointer font-sans text- font-bold hover:underline text-blue-900 ">
              DC
            </span>
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
