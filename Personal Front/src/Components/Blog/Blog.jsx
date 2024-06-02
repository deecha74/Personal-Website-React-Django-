import React from "react";
import { MdOutlineArticle } from "react-icons/md";
import background from "../../assets/Images/2.jpg";
import "./Blog.css";
const Blog = () => {
  return (
    <>
      <div className="flex  items-center justify-center"></div>
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
    </>
  );
};

export default Blog;
