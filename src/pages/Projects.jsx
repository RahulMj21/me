import React, { useEffect, useState } from "react";
import AnimatedLetters from "../components/AnimatedLetters";

const Projects = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const projectsArray = ["P", "r", "o", "j", "e", "c", "t", "s"];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);
  return (
    <section className="projects">
      <h3 className="tag html-open">
        {"<"}html{">"}
      </h3>
      <h3 className="tag body-open">
        {"<"}body{">"}
      </h3>

      <div className="container">
        <h1 className="heading">
          <h3 className="tag h1-open">
            {"<"}h1{">"}
          </h3>
          <h3 className="tag h1-close">
            {"<"}/h1{">"}
          </h3>
          <AnimatedLetters
            letterClass={letterClass}
            letterArray={projectsArray}
            idx={9}
          />
        </h1>
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

export default Projects;
