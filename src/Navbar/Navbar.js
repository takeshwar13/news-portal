import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            News Portal
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
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
                  to="/general"
                  aria-current="page"
                >
                  General
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Buisness
                </Link>
              </li>
              <li className="nav-item active">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Entertenment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Bollywood
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Cricket
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Helth
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white"
                  to="#"
                  aria-current="page"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
