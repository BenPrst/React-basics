import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoSearchCircle } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import "./Nav.scss";

const Nav = () => {
  const currentPath = window.location.pathname;
  return (
    <div className="nav-bar">
      <a href="/home" className={currentPath === "/home" ? "active" : ""}>
        <AiFillHome />
      </a>
      <a href="/search" className={currentPath === "/search" ? "active" : ""}>
        <IoSearchCircle />
      </a>
      <a href="/test2" className={currentPath === "/test2" ? "active" : ""}>
        <BsFillPersonFill />
      </a>
    </div>
  );
};

export default Nav;
