import React from "react";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <ul className="side-list">
        <a href="https://www.facebook.com/ashim.gotame.9">
          <li className="side-link">
            <AiFillFacebook />
          </li>
        </a>
        <a href="https://twitter.com/AshimGotame4">
          <li className="side-link">
            <AiFillTwitterSquare />
          </li>
        </a>
        <a href="https://www.instagram.com/ashim_gotame/">
          <li className="side-link">
            <AiFillInstagram />
          </li>
        </a>
        <a href="/">
          <li className="side-link">
            <BsDiscord />
          </li>
        </a>
        <a href="https://github.com/Ashim1991" >
          <li className="side-link">
            <AiFillGithub />
          </li>
        </a>
        <a href="https://www.linkedin.com/in/ashim-gotame-8b39a3199/">
          <li className="side-link">
            <AiFillLinkedin />
          </li>
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
