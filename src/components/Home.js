import React from "react";
import image from "../images/code.svg";

import Project from "./project";

// import {FaHtml5} from "react-icons/fa"
const Home = () => {
  return (
    <>
      <header className="head  ">
        <main className="flex flex-row justify-between mr-16">
        <div>
            <img className="head-img max-w-xl" alt="" src={image} />
          </div>
          <div className=" justify-center flex flex-col ml-0">
            <h1 className="head-title text-4xl">
              Welcome to Pratik's portfolio
            </h1>
            <h1 className="head-focus text-5xl text-center">
              I am Full Stack Web Developer{" "}
            </h1>
          </div>
          
        </main>
      </header>
      <div className="container-front">
        <section className="section ow h-52 items-center flex">
          <div className=" items-center m-auto text-left flex flex-col">
            <h1 className="text-3xl text-blue-400">My Skils</h1>
            <p className="text-xl items-start flex flex-col">
              <h1>Frontend Web: HTML5, CSS3, Javascript, React, NodeJS, Tailwind css , Redux</h1>
              <h1>Backend Web: Express, Mongoose, MySQL, MongoDB</h1>
              <h1>VCS: Git, Github</h1>
              <h1>Web Hosting: Netlify</h1>
            </p>
          </div>

        </section>
        <Project/>

      </div>
      {/* <div className="container-front">
        <section className="section h-52 items-center flex">
          <div className="items-center m-auto text-left flex flex-col">
            <h1 className="text-3xl text-blue-400">Projects</h1>
            <p className="text-xl items-start flex flex-col my-4">
             Here you can get some of my projects that hosted online
            </p>
            <Link className="link link-primary" to="project/">
              See Projects
            </Link>
          </div>
        </section>
      </div> */}
    </>
  );
};

export default Home;
