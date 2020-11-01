import React from "react";
import { Link } from "react-router-dom";
import "./header.style.css";

function Header() {
  return (
    <nav>
      <input id="nav-toggle" type="checkbox" />
      <div className="logo">
        <strong>Said SOUHAYEL</strong>
      </div>
      <ul className="links">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/work">
            Work
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <label htmlFor="nav-toggle" className="icon-burger">
        <i className="fa fa-bars"></i>
      </label>
    </nav>
  );
}

export default Header;
