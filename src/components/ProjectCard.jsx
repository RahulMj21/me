import React from "react";
import codesync from "../assets/images/codesync21.png";
import { FaEye, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project, showBorder }) => {
  return (
    <div
      className={`project-card ${showBorder ? "showBorder" : ""}`}
      style={{ "--delay": `${(2 + (project.id - 1)) / 2}s` }}
    >
      <img src={project.poster} loading="lazy" alt="codesync" />
      <div className="right">
        <h1>
          {project.id}. {project.title}
        </h1>
        <p>{project.description}</p>
        <div className="tags">
          {project.tags.map((tag) => {
            return (
              <div className="item" key={tag}>
                {tag}
              </div>
            );
          })}
        </div>
        <div className="buttons">
          {project.live && (
            <a
              className="btn-brand"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              <FaEye /> View Site
            </a>
          )}
          <a
            className="btn-brand"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> View Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
