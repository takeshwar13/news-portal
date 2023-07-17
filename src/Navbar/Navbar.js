import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link
                className="nav-link text-white"
                to="/home"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                General
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Buisness
              </Link>
            </li>
            <li className="nav-item active">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Sports
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Entertenment
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Bollywood
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Cricket
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Helth
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-white"
                href="#"
                aria-current="page"
              >
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
