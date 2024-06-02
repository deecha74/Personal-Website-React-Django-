import React from "react";
import { GrContact } from "react-icons/gr";
import { RiFindReplaceLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <hr />

      <div className="mt-4 flex items-center justify-center">
        <div className="">
          <h1 className="text-3xl font-sans flex flex-cols items-center justify-center gap-3">
            Get In Touch
            <GrContact className="text-blue-600" />
          </h1>
          <h2>Do you have a Project in Mind ?</h2>
        </div>
      </div>
      <div className="mt-3 sm:px-12 px-6 py-10  mx-10">
        <div className="sm:grid md:grid-cols-2 flex md:flex-row flex-col sm:flex-col  ">
          <div className="sm:h-60 h-auto   sm:w-[90%] bg-blue-800 text-white p-3 pt-0 rounded-xl flex flex-col items-center justify-center">
            <h1 className="p-5 flex  items-center justify-center gap-2 text-2xl">
              <RiFindReplaceLine className="hover:scale-110 cursor-progress" />
              Find Me
            </h1>
            <h1 className="flex sm:flex-row flex-col items-center justify-center  gap-1">
              <MdOutlineEmail className="" />
              E-mail :
              <span className="hover:underline cursor-pointer transition-all ease-in-out duration-150">
                chalisedeepak1@gmail.com
              </span>
            </h1>
            <h1 className="flex sm:flex-row flex-col p-2 items-center justify-center  gap-1">
              <FaPhoneAlt className="" />
              Phone :
              <span className="hover:underline cursor-pointer transition-all ease-in-out duration-150">
                +977 984 350 5125
              </span>
            </h1>
          </div>

          <div className="sm:h-60 sm:w-[520px] md:w-auto md:flex-col sm:mt-12  md:p-4 md:m-6   text-white p-3 rounded-xl flex flex-col items-center justify-center">
            <div className="flex sm:flex-row flex-col md:flex-col  lg:flex-row gap-2 ">
              <input
                type="text"
                name=""
                id=""
                className="rounded-md border-2  text-black font-bold border-blue-700 p-2"
                placeholder="Name "
              />
              <input
                type="email"
                name=""
                id=""
                className="rounded-md border-2  text-black font-bold border-blue-700  p-2"
                placeholder="E-mail"
              />
            </div>
            <div className="pt-3 ">
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="text-black border-2 font-bold sm:w-[450px] border-blue-800 rounded-md p-2 sm:h-48 h-20  lg:w-[467px] md:h-30  md:w-auto"
                placeholder="Type Your Message !"
              ></textarea>
            </div>

            <button
              type="submit"
              className=" flex gap-2 justify-start items-center  border-none shadow-md border-2  font-bold  hover:shadow-md bg-blue-900 p-3 rounded-xl px-5 text-m  text-white hover:bg-blue-700  font-sans active:scale-95 transition-all ease-in-out duration-100 "
            >
              Send <IoIosSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
