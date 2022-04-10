import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdHome } from "react-icons/md";
import {
  FaUser,
  FaEnvelope,
  FaFacebookF,
  FaBriefcase,
  FaTwitter,
} from "react-icons/fa";
import { RiGithubLine, RiInstagramLine, RiLinkedinFill } from "react-icons/ri";
import image from "../assets/images/r_logo.png";

const links = [
  { text: "Home", link: "/", icon: <MdHome />, small: false },
  { text: "About", link: "/about", icon: <FaUser className="small" /> },
  { text: "Work", link: "/work", icon: <FaBriefcase className="small" /> },
  { text: "Contact", link: "/contact", icon: <FaEnvelope className="small" /> },
];
const Sidebar = () => {
  return (
    <header className="sidebar">
      <NavLink to="/" className="logo" translate="no">
        <img src={image} alt="Rahul" />
        <h4>Rahul</h4>
      </NavLink>
      <nav className="nav">
        {links.map(({ text, link, icon }) => (
          <NavLink activeclassname="active" to={link} key={text}>
            {icon}
            <span>{text}</span>
          </NavLink>
        ))}
      </nav>
      <div className="socials">
        <a href="https://twitter.com/RahulMJ21" target="_blank">
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/rahulm21j"
          target="_blank"
          className="big"
        >
          <RiInstagramLine />
        </a>
        <a href="https://github.com/RahulMj21" target="_blank" className="big">
          <RiGithubLine />
        </a>
        <a
          href="https://www.linkedin.com/in/rahul-mondal-39927b200"
          target="_blank"
          className="big"
        >
          <RiLinkedinFill />
        </a>
      </div>
    </header>
  );
};

export default Sidebar;
