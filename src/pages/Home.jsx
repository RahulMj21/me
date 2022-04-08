import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import image from "../assets/images/r_logo.png";
import AnimatedLetters from "../components/AnimatedLetters";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [changeLogoClass, setChangeLogoClass] = useState(false);
  const nameArray = [
    "a",
    "h",
    "u",
    "l",
    " ",
    "M",
    "o",
    "n",
    "d",
    "a",
    "l",
    ",",
  ];
  const jobArray = [
    "W",
    "e",
    "b",
    " ",
    "D",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <section className="home">
      <h3 className="tag html-open">
        {"<"}html{">"}
      </h3>
      <h3 className="tag body-open">
        {"<"}body{">"}
      </h3>

      <div className="home__left">
        <h1 className="home__heading">
          <h3 className="tag h1-open">
            {"<"}h1{">"}
          </h3>
          <h3 className="tag h1-close">
            {"<"}/h1{">"}
          </h3>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <span className={`${letterClass} _13`}>,</span>
          <br />
          <span className={`${letterClass} _14`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
          <img
            src={image}
            alt="R"
            className={changeLogoClass ? "home__logoTilt" : "home__logo"}
            onAnimationEnd={() => setChangeLogoClass(true)}
          />
          <AnimatedLetters
            letterClass={letterClass}
            letterArray={nameArray}
            idx={17}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            letterArray={jobArray}
            idx={25}
          />
        </h1>
        <p className="home__para">Frontend + Backend Javascript-Developer</p>
        <NavLink to="/contact">
          <button className="btn-brand">CONTACT ME</button>
        </NavLink>
      </div>
      <div className="home__right">
        <Logo />
      </div>

      <h3 className="tag body-close">
        {"<"}/body{">"}
      </h3>
      <h3 className="tag html-close">
        {"<"}/html{">"}
      </h3>
    </section>
  );
};

export default Home;
