import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function OffNav() {
  return (
    <ul
      className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-end"
      id="menu"
    >
      <li>
        <Link to="/about" className="nav-link float-end" href="#">
          <span className="ms-1 d-sm-inline px-0">ABOUT</span>
        </Link>
      </li>
      <li>
        <Link to="/work" className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">WORK</span>
        </Link>
      </li>

      <li>
        <Link className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">RESUME</span>
        </Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">CONTACT</span>
        </Link>
      </li>
    </ul>
  );
}
