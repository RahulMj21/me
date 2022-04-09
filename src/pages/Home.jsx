import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import image from "../assets/images/r_logo.png";
import AnimatedLetters from "../components/AnimatedLetters";
import Loader from "../components/Loader";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const [changeLogoClass, setChangeLogoClass] = useState(false);
  const [loading, setLoading] = useState(true);
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
    }, 7000);
  }, []);

  return loading ? (
    <Loader setLoading={setLoading} />
  ) : (
    <section className="home">
      <h3 className="tag html-open">
        {"<"}html{">"}
      </h3>
      <h3 className="tag body-open">
        {"<"}body{">"}
      </h3>

      <div className="content">
        <div className="home__left">
          <h1 className="home__heading">
            <h3 className="tag h1-open">
              {"<"}h1{">"}
            </h3>
            <h3 className="tag h1-close">
              {"<"}/h1{">"}
            </h3>
            <span className={letterClass} style={{ "--delay": "1s" }}>
              H
            </span>
            <span className={letterClass} style={{ "--delay": `${12 / 10}s` }}>
              i
            </span>
            <span className={letterClass} style={{ "--delay": `${13 / 10}s` }}>
              ,
            </span>
            <br />
            <span className={letterClass} style={{ "--delay": `${14 / 10}s` }}>
              I
            </span>
            <span className={letterClass} style={{ "--delay": `${15 / 10}s` }}>
              '
            </span>
            <span className={letterClass} style={{ "--delay": `${16 / 10}s` }}>
              m
            </span>
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
              idx={29}
            />
          </h1>
          <p className="home__para">Frontend + Backend Javascript-Developer</p>
          <NavLink to="/contact">
            <button className="btn-brand">CONTACT ME</button>
          </NavLink>
        </div>
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
