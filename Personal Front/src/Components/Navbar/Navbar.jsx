import React, { useEffect, useState } from "react";
import logo from "../../assets/Images/logo.svg";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, Settoggle] = useState(true);

  const handelchange = () => {
    Settoggle(!toggle);
  };
  const handelmenu = () => {
    Settoggle(menu);
  };
  return (
    <>
      <div className="   flex flex-row  navbarr md:p-4  items-center justify-between lg:pe-16 lg:ps-10 sm:ps-20  z-30 ">
        <div className=" sm:ps-4 lg:ps-6">
          <Link to="/">
            <img
              src={logo}
              alt=""
              className=" h-16 w-auto logo lg:h-20 hover:scale-105 cursor-pointer  transition-all ease-in-out duration-200"
            />
          </Link>
        </div>
        <div onClick={handelmenu}>
          {toggle ? (
            <div className="  hidden md:block uldee">
              <ul className="flex items-center gap-4 ">
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  <Link to="/"> Home </Link>
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  About
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  <Link to="/Blog"> Blog </Link>
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  Service
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  <Link to="/contact"> Contact </Link>
                </li>
                <button className="   downloadmenu bg-transparent border-blue-800 border-solid border-2 font-bold hover:text-white hover:shadow-md hover:bg-blue-800 p-2 rounded-2xl px-4 text-m uppercase  font-sans active:scale-95 transition-all ease-in-out duration-100 ">
                  <a download="Deepak CV " href={logo}>
                    {" "}
                    Download CV{" "}
                  </a>
                </button>
              </ul>
            </div>
          ) : (
            <div className=" uldee ">
              <ul className="flex items-center gap-4   ">
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  Home
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  About
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  Portfolio
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  Service
                </li>
                <li className="cursor-pointer uppercase font-bold font-sans li hover:text-blue-800 hover:scale-105 transition-all ease-in-out duration-100">
                  Contact
                </li>
                <button className="   downloadmenu bg-transparent border-blue-800 border-solid border-2 font-bold hover:text-white hover:shadow-md hover:bg-blue-800 p-2 rounded-2xl px-4 text-m uppercase  font-sans active:scale-95 transition-all ease-in-out duration-100 ">
                  Download CV
                </button>
              </ul>
            </div>
          )}
        </div>
        <button className=" hidden downloadmenu bg-transparent border-blue-800 border-solid border-2 font-bold hover:text-white hover:shadow-md hover:bg-blue-800 p-2 rounded-2xl px-4 text-m uppercase  font-sans active:scale-95 transition-all ease-in-out duration-100 ">
          Download CV
        </button>

        <div className="md:hidden" onClick={handelchange}>
          {toggle ? (
            <GiHamburgerMenu className=" deepaka  " />
          ) : (
            <IoMdClose className=" cross  " />
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
