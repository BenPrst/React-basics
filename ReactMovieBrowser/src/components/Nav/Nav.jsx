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
// // //In this updated code, we've created a
// new NavLink component that takes the path,
// icon, and label as props. Inside the
// component, we've used the same logic as
// before to generate an SVG icon with a linear
// gradient applied to it, but now we're using
// the props to customize the path and label for
// each link.

// // In the Nav component, we're now rendering
// the NavLink components instead of hardcoding
// the links and icons. This allows us to reduce
// the amount of duplicated code and makes it
// easier to add new links in the future.
