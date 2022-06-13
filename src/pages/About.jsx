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
import Loader from "../components/Loader";
import Bio from "../assets/pdf/bio.pdf";
import { skills } from "../assets/data";

const About = () => {
  const [loading, setLoading] = useState(true);
  const [letterClass, setLetterClass] = useState("text-animate");
  const aboutArray = ["A", "b", "o", "u", "t", " ", "M", "e"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 5000);
  }, []);
  return loading ? (
    <Loader setLoading={setLoading} />
  ) : (
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
            I'm rahul, a passionate developer with a genuine interest in the web
            and the user experience. I am committed to learning new things to
            always be improving my skills and finding new approaches to solve
            problems.
          </p>
          <div className="tags">
            {skills.map((skill) => (
              <div className="item" key={skill}>
                {skill}
              </div>
            ))}
          </div>
          <a href={Bio} download className="btn-brand">
            DOWNLOAD CV
          </a>
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
