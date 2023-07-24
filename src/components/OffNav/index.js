import React from "react";
import "./style.css";

export default function OffNav() {
  return (
    <ul
      className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-end"
      id="menu"
    >
      <li>
        <a className="nav-link float-end" href="#">
          <span className="ms-1 d-sm-inline px-0">ABOUT</span>
        </a>
      </li>
      <li>
        <a className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">EXPERIENCE</span>
        </a>
      </li>
      <li>
        <a className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">WORK</span>
        </a>
      </li>

      <li>
        <a className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">RESUME</span>
        </a>
      </li>
      <li>
        <a className="nav-link text-truncate">
          <span className="ms-1 d-sm-inline">CONTACT</span>
        </a>
      </li>
    </ul>
  );
}
