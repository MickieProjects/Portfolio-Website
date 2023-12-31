import React from "react";
import { Bio } from "../../data/data";
import "./style.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 btn-gradient-border"
            >
              <li className="p-1 md:p-2">
                <a className="p-2">About</a>
              </li>
              <li className="p-1 md:p-2">
                <a className="p-2">Skills</a>
              </li>
              <li className="p-1 md:p-2">
                <a className="p-2">Projects</a>
              </li>
              <li className="p-1 md:p-2">
                <a className="p-2">Contact</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-glow">Portfolio</a>
        </div>
        {/* Desktop */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Skills</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a
            className="px-4 py-2 rounded-md bg-transparent text-white btn-gradient-border "
            href={Bio.resume}
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
