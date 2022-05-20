import React from "react";
import codesync from "../assets/images/codesync21.png";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className="project-card">
      <img src={codesync} loading="lazy" alt="codesync" />
      <div className="right">
        <h1>1. CodeSync - Realtime multiuser code editor,</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
          alias similique aliquam
        </p>
        <div className="tags">
          <div className="item">html</div>
          <div className="item">css</div>
          <div className="item">expressjs</div>
        </div>
        <div className="buttons">
          <div className="btn-brand">
            <FaEye /> View Site
          </div>
          <div className="btn-brand">
            <FaGithub /> View Code
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
