import React from "react";
import logo from '../../assets/images/lg_umai.png'

const NavBar = () => {
  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img
            alt="logo"
            src={logo}
            width="112"
            height="28"
          />
        </a>

        <a
          href="#kk"
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <div className="navbar-item">
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
