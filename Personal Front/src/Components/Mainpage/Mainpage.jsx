import React from "react";
import robot from "../../assets/Images/robot.png";
import "./Mainpage.css";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Helmet } from "react-helmet";
import Blog from "../Blog/Blog";
import { FcAbout } from "react-icons/fc";
import Contact from "../Contact/Contact";
import { MdOutlineArticle } from "react-icons/md";
import background from "../../assets/Images/2.jpg";
import "./Blog.css";

const Mainpage = () => {
  return (
    <>
      <Helmet>
        <title> Deepak Chalise </title>
      </Helmet>
      <div className="sm:grid text-part sm:grid-cols-2  text-part  p-3  gap-3 sm:h-[80lvh]">
        <div className="flex flex-col  sm:justify-center sm:h-96    w-100% sm:ps-[30%]">
          <h1 className=" text-blue-800 font-bold ">Hello, i'm</h1>
          <h1 className="text-3xl font-bold">Deepak Chalise</h1>
          <h1 className=" pt-3">
            A Full-Stack Developer From{" "}
            <span className="text-blue-700 font-bold">KATHMANDU</span>{" "}
            <span className="text-orange-600 font-bold">!</span>{" "}
          </h1>
          <h1 className=" text-m font-bold pt-3">
            I'm a Fullstack Web developer from Nepal and i am dedicated and
            passionate to work !{" "}
          </h1>
          <div className="pt-5">
            <div className="flex flex-row items-center justify-start gap-2">
              <button className="   border-none shadow-md border-2  font-bold  hover:shadow-md bg-blue-900 p-3 rounded-2xl px-5 text-m  text-white hover:text-gray-200 hover:bg-blue-700  font-sans active:scale-95 transition-all ease-in-out duration-100 ">
                Hire Me
              </button>
              <div className="gap-2 flex flex-row">
                <FaFacebookF className="h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-100 hover:text-blue-700" />
                <FaXTwitter className="h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-100 hover:text-blue-700" />
                <FaLinkedinIn className="h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-100 hover:text-blue-700" />
                <IoLogoGithub className="h-4 w-4 cursor-pointer hover:scale-105 transition-all ease-in-out duration-100 hover:text-blue-700" />
              </div>
            </div>
          </div>
        </div>
        <div className="roboti  ">
          <img src={robot} alt=" Hello I am a  " className="drop-shadow-sm" />
        </div>
      </div>
      <div className="sm:mx-0 sm:px-4 about-part bg-white">
        <div className=" ">
          <h1 className="text-3xl sm:py-6 py-6 flex items-center justify-center gap2">
            <FcAbout className="text-blue-800 underline   " /> About me
          </h1>
        </div>
        <div className="sm:grid sm:grid-cols-2 md:py-4 gap-3">
          <div className="h-60 w-full sm:m-3 flex items-center justify-center mx-4">
            <div className="sm:h-auto h-auto md:h-auto  mx-2 gap-2 md:w-[70%]  bg-white shadow-gray-400 shadow-md rounded-md  sm:ms-5">
              <h1 className="grid place-items-center p-2 text-2xl font-bold">
                My Introduction
              </h1>
              <h1 className="p-4  text-sm">
                I am a developer skilled in both front-end and back-end
                technologies. I specialize in crafting sleek interfaces with
                HTML, CSS, and JavaScript frameworks like React, while also
                building robust server-side solutions with Python, and Django.
                With a passion for innovation and a commitment to quality, I
                bring creative ideas to life.
              </h1>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 mt-2">
            <div className="flex items-center justify-start flex-col">
              <h1 className="p-3 text-2xl">Frontend</h1>
              <div className="flex flex-wrap gap-1">
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  HTML
                </button>
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  CSS
                </button>
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  JAVASCRIPT
                </button>
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  TAILWIND
                </button>
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  REACT
                </button>
              </div>
            </div>
            <div className="flex items-center justify-start flex-col">
              <h1 className="p-3 text-2xl">Backend</h1>
              <div className="flex flex-wrap gap-1">
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  PYTHON
                </button>
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  DJANGO
                </button>
              </div>
            </div>
            <div className="flex items-center justify-start flex-col">
              <h1 className="p-3 text-2xl">Database</h1>
              <div className="flex flex-wrap gap-1">
                <button className="  border-none shadow-md border-2 hover:shadow-md bg-blue-800 p-1 rounded-lg px-2 text-xs  text-white hover:text-gray-200 hover:bg-blue-700 transition-all ease-in-out duration-100 ">
                  MYSQL
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="scroll-watcher"></div>
      <div className="flex  items-center justify-center">
        <hr className="w-[70%] bg-blue-600 h-[2px] rounded-2xl" />
      </div>
      <div className="px-7 py-4 m-3 ">
        <h1 className=" flex items-center justify-center  text-3xl gap-1">
          <MdOutlineArticle className="text-blue-700" />
          Blog
        </h1>
        <div className="flex blogs items-center justify-center md:flex-wrap sm:flex-wrap sm:gap-1 sm:justify-evenly">
          <div className=" pt-16 justify-center  ">
            <div class="relative flex w-80 flex-col rounded-xl bg-blue-100 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-100 bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
                <img
                  src={background}
                  alt=" "
                  className="hover:scale-105 transition-all ease-in-out duration-300 *:"
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal   ">
                  This is My blog One
                </h5>
                <p class="sm:line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  quo facere deserunt labore necessitatibus iste rerum neque
                  assumenda distinctio ea ut praesentium nihil placeat similique
                  beatae, rem explicabo harum esse! Tempore eum maiores fugiat
                  optio repellendus nostrum corporis amet necessitatibus,
                  pariatur quidem repellat eius harum alias at aspernatur minus
                  rem iusto dolorum? Quia sapiente reprehenderit adipisci
                  perspiciatis, veritatis ratione eaque vero? Modi fugiat ut
                  deserunt, quaerat praesentium quasi veniam quam fugit et esse
                  vel sequi vero voluptates reiciendis facilis ad, possimus
                  mollitia exercitationem in! Repudiandae natus modi illo. Neque
                  nemo ipsa et nam beatae tempora incidunt laboriosam aperiam
                  excepturi. Labore!
                </p>
              </div>
              <div class="p-6 flex items-center justify-end  pt-0">
                <button class="select-none rounded-lg  bg-blue-500  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-white transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:scale-95 active:shadow-none ">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" pt-16  ">
            <div class="relative flex w-80 flex-col rounded-xl bg-blue-100 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-100 bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
                <img
                  src={background}
                  alt=" "
                  className="hover:scale-105 transition-all ease-in-out duration-300 "
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal   ">
                  This is My blog One
                </h5>
                <p class="sm:line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  quo facere deserunt labore necessitatibus iste rerum neque
                  assumenda distinctio ea ut praesentium nihil placeat similique
                  beatae, rem explicabo harum esse! Tempore eum maiores fugiat
                  optio repellendus nostrum corporis amet necessitatibus,
                  pariatur quidem repellat eius harum alias at aspernatur minus
                  rem iusto dolorum? Quia sapiente reprehenderit adipisci
                  perspiciatis, veritatis ratione eaque vero? Modi fugiat ut
                  deserunt, quaerat praesentium quasi veniam quam fugit et esse
                  vel sequi vero voluptates reiciendis facilis ad, possimus
                  mollitia exercitationem in! Repudiandae natus modi illo. Neque
                  nemo ipsa et nam beatae tempora incidunt laboriosam aperiam
                  excepturi. Labore!
                </p>
              </div>
              <div class="p-6 flex items-center justify-end  pt-0">
                <button class="select-none rounded-lg  bg-blue-500  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-white transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:scale-95 active:shadow-none ">
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className=" pt-16  ">
            <div class="relative flex w-80 flex-col rounded-xl bg-blue-100 cursor-pointer hover:-translate-y-1 transition-all ease-in-out duration-100 bg-clip-border text-gray-700 shadow-md">
              <div class="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 ">
                <img
                  src={background}
                  alt=" "
                  className="hover:scale-105 transition-all ease-in-out duration-300 *:"
                />
              </div>
              <div class="p-6">
                <h5 class="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal   ">
                  This is My blog One
                </h5>
                <p class=" sm:line-clamp-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                  quo facere deserunt labore necessitatibus iste rerum neque
                  assumenda distinctio ea ut praesentium nihil placeat similique
                  beatae, rem explicabo harum esse! Tempore eum maiores fugiat
                  optio repellendus nostrum corporis amet necessitatibus,
                  pariatur quidem repellat eius harum alias at aspernatur minus
                  rem iusto dolorum? Quia sapiente reprehenderit adipisci
                  perspiciatis, veritatis ratione eaque vero? Modi fugiat ut
                  deserunt, quaerat praesentium quasi veniam quam fugit et esse
                  vel sequi vero voluptates reiciendis facilis ad, possimus
                  mollitia exercitationem in! Repudiandae natus modi illo. Neque
                  nemo ipsa et nam beatae tempora incidunt laboriosam aperiam
                  excepturi. Labore!
                </p>
              </div>
              <div class="p-6 flex items-center justify-end  pt-0">
                <button class="select-none rounded-lg  bg-blue-500  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-white transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:scale-95 active:shadow-none ">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default Mainpage;
