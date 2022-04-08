import React, { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import {
  FaHtml5,
  FaCss3,
  FaJsSquare,
  FaGitAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutArray = ["A", "b", "o", "u", "t", " ", "M", "e"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <section className="about">
      <h3 className="tag html-open">
        {"<"}html{">"}
      </h3>
      <h3 className="tag body-open">
        {"<"}body{">"}
      </h3>

      <div className="content">
        <div className="about__left">
          <h1 className="heading">
            <h3 className="tag h1-open">
              {"<"}h1{">"}
            </h3>
            <h3 className="tag h1-close">
              {"<"}/h1{">"}
            </h3>
            <AnimatedLetters
              letterClass={letterClass}
              letterArray={aboutArray}
              idx={9}
            />
          </h1>
          <p className="para">
            Hi there! I'm very ambitious frontend + backend Javascript developer
            looking for opportunity to work & collaborate. I am pretty much
            confident about my work. Always learning new technologies and
            polishing old learnings.
          </p>
          <button className="btn-brand">DOWNLOAD CV</button>
        </div>
        <div className="about__right">
          <div className="icons-container">
            <div className="icon html">
              <FaHtml5 />
            </div>
            <div className="icon css">
              <FaCss3 />
            </div>
            <div className="icon git">
              <FaGitAlt />
            </div>
            <div className="icon js">
              <FaJsSquare />
            </div>
            <div className="icon react">
              <FaReact />
            </div>
            <div className="icon nodejs">
              <FaNodeJs />
            </div>
          </div>
        </div>
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

export default About;
