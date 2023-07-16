import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#" aria-current="page">
                Home
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#" aria-current="page">
                General
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#" aria-current="page">
                Buisness
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link text-white" href="#" aria-current="page">
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" aria-current="page">
                Entertenment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" aria-current="page">
                Bollywood
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" aria-current="page">
                Cricket
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" aria-current="page">
                Helth
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#" aria-current="page">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
