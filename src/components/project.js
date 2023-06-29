import React from "react";
import landingPage from "../images/zomato-landing-page.jpg";
import BookMyShow from "../images/BookMyShowClone.jpg";
import Taksy from "../images/taskyApplication.jpg";
const project = () => {
  const projects = [
    {
      name: "Zomato clone",
      description:
        "Zomato clone with the all the functionality of the original zomato website made up of MERN stack + tailwind CSS",
      image: landingPage,
      gitHubLink: "https://github.com/pratikshelar546/zoamto-clone",
      NoSite: "Sorry but this site is not a live on internet",
    },
    {
      name: "BookMyShow clone",
      description:
        "BookMyShow clone is made to enhance my frontend knowledge this is only the UI part of the BookMyShow the all movies is fetch by the API",
      image: BookMyShow,
      gitHubLink: "https://github.com/pratikshelar546/book-my-show-clone",
      viewSite: "https://cloneofbookmyshow.netlify.app",
    },
    {
      name: "Zomato landing page clone",
      description:
        "This is the only landing page of zomato which is made up of html css and javascript ",
      image: landingPage,
      gitHubLink: "https://github.com/pratikshelar546/zomato_landingPage_clone",
      viewSite: "https://zoomato-clone-dt.netlify.app",
    },
    {
      name: "Tasky Application",
      description:
        "this is made up of javascript where we can add our own task which we can edit delete whenever we want.",
      image: Taksy,
      gitHubLink: "https://github.com/pratikshelar546/tasky_application",
      viewSite: "https://taskyy-app.netlify.app/",
    },
  ];
  return (
    <>
      {/* <main>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Profit-or-loss</h1>
        <small>July 2022</small>
        <p>
         In this website you can check your stocks are in profit or in loss with the percentage of it.
        </p>
        <a href="https://hxg3ui.csb.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/stockpracticecheck" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Is-your-birthday-palindrome?</h1>
        <small>July 2022</small>
        <p>
         In this website you can check your birthday is palindrome or not. if not then nearest palindrome date will be shown and how much day you missed.
        </p>
        <a href="https://isyourbirthdateispalindriome.netlify.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/Is-your-birthday-is-palemdrome" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Learn triangle</h1>
        <small>July 2022</small>
        <p>
         In this website you can learn about triangle.
        </p>
        <a href="https://learn-about-triangle.netlify.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/is-triangle-" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Is your birthday lucky?</h1>
        <small>July 2022</small>
        <p>
          A website which can helps you to check whether your birthday is
          lucky or not.
        </p>
        <a href="https://is-yoursbirthday-lucky.netlify.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/is-your-birthday-lucky" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Cash manager</h1>
        <small>July 2022</small>
        <p>
          A cash manager which helps the user by telling how much cash return
          to the customer with minimum number of notes
        </p>
        <a href="https://cashh-managerr.netlify.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/Cash-register-manage" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>FoodDuds</h1>
        <small>July 2022</small>
        <p>
          Are you a foodie person? and Do you want to know which brand has
          more rating of your favourite brand? then this is for you. here you
          can see rating of your favourite brand
        </p>
        <a href="https://qvngbg.csb.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/foodDudes" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>emoji interpreter</h1>
        <small>July 2022</small>
        <p>
          Do you want to know meaning of emojis? if yes, then see this library
          of emojis with meanings. this library build using
          <strong>React JS.</strong>
        </p>
        <a href="https://jhfio0.csb.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/Emoji-interpreter" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>pirate Speaks</h1>
        <small>June 2022</small>
        <p>
          Do you know pirate language? here we translate english with pirate language using<strong>Vanilla JS</strong> 
        </p>
        <a href="https://lang-pirate.netlify.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/pirate-translate" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>

  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Minions Speaks</h1>
        <small>June 2022</small>
        <p>
          Are you fan of minions? if your fan then this is just build for you.
          First app that has been build using <strong>Vanilla JS</strong> Here
          you can convert your text to <strong>minions language </strong>
        </p>
        <a href="https://minionspeacks.netlify.app/" className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/minions-speak" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>

  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>Are you a Programmer?</h1>
        <small>June 2022</small>
        <p>
          Let's see how you knownabout programming Let's play a quiz and see.
        </p>
        <a href="https://replit.com/@PratikShelar/Quiz-done?embed=1&output=1" className="link link-primary">Live
          project</a>
        <a href="https://github.com/pratikshelar546/Quiz-done-1" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  <div className="container-front">
    <section className="section ow">
      <div className="container-center">
        <h1>how well do you know me?</h1>
        <small>June 2022</small>
        <p>
          A CLI app build with <strong>nodejs</strong> you can send to your
          friend to find out who really know you
        </p>
        <a href="https://replit.com/@PratikShelar/How-well-do-you-know-me?embed=1&output=1"
          className="link link-primary">Live project</a>
        <a href="https://github.com/pratikshelar546/-exe14-1" className="link link-secondary">Source Code</a>
      </div>
    </section>
  </div>
  </main> */}
      <main className="flex justify-center align-middle">
        <div className="relative  w-full h-full max-w-6xl">
          <h1 className="head-title text-3xl mb-5">
            Here is some of <span className="head-focus">Projects</span>
          </h1>
          <div className="">
            <div className="grid grid-cols-1 w-full gap-8  relative justify-center">
              {projects.map((data,each) => {
                return (
                  <>
                    <div className="w-full h-96  gap-6   flex flex-row mb-12" key={each}>
                      <img alt={data.name} src={data.image} className=" w-3/5 h-full object-fill hover:scale-105 cursor-pointer transition duration-500" />
                      <div className="flex flex-col align-middle gap-4 justify-center">
                      <h1 className=" color text-3xl">{data.name}</h1>
                      <p className="text-xl">{data.description}</p>
                      <div className="gap-7 flex text-xl">
                        {data.viewSite?   <a className="bgcolor rounded-lg px-5 py-2 text-white" href={data.viewSite}>Visit site</a>:null}
                      <a className=" rounded-lg px-5 py-2 color border border-[--primary-color]" href={data.gitHubLink}>Source Code</a>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    
    </>
  );
};

export default project;
