import React from "react";
import image from "../images/code.svg";

import Project from "./project";

// import {FaHtml5} from "react-icons/fa"
const Home = () => {
  return (
    <>
      <header className="head  ">
        <main className="flex lg:flex-row md:flex-row flex-col justify-between md:mr-16">
        <div>
            <img className="head-img lg:max-w-xl " alt="" src={image} />
          </div>
          <div className=" justify-center flex flex-col ">
            <h1 className="head-title md:text-4xl  text-2xl">
              Welcome to Pratik's portfolio
            </h1>
            <h1 className="head-focus text-2xl md:text-5xl text-center">
              I am Full Stack Web Developer{" "}
            </h1>
          </div>
          
        </main>
      </header>
      <div className="container-front">
        <section className="section ow h-full items-center flex">
          <div className=" items-center m-auto text-left flex flex-col">
            <h1 className="text-3xl text-blue-400">My Skils</h1>
            <div className="text-xl  flex flex-col">
              <div className="flex flex-row gap-4">
                <h1>Frontend:</h1>
                <h1>HTML5, CSS3, Javascript, React, NodeJS, Tailwind css , Redux</h1>
              </div>
              <div className="flex flex-row gap-4">
                <h1>Backend:</h1>
                <h1>Express, Mongoose, MySQL, MongoDB</h1>
              </div>
              <div className="flex flex-row gap-4">
                <h1>VCS:</h1>
                <h1> Git, Github</h1>
              </div>
              <div className="flex flex-row gap-4">
                <h1>Web Hosting:</h1>
                <h1>Netlify</h1>
              </div>
           
            </div>
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
