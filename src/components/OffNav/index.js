import React from "react";
import { Link, useLocation } from "react-router-dom";
import resume from "../../assets/info/JTrevizoResume(Sept)2.pdf";
import "./style.css";

export default function OffNav() {
  const location = useLocation();
  console.log(location);
  return (
    <ul
      className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-end"
      id="menu"
    >
      {location.pathname === "/contact" ? (
        <li>
          <Link to="/" className="nav-link float-end" href="#">
            <span className="ms-1 d-sm-inline px-0">HOME</span>
          </Link>
        </li>
      ) : (
        <></>
      )}
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
        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="nav-link px-2"
        >
          RESUME
        </a>
      </li>
      {location.pathname === "/contact" ? (
        <></>
      ) : (
        <li>
          <Link to="/contact" className="nav-link text-truncate">
            <span className="ms-1 d-sm-inline">CONTACT</span>
          </Link>
        </li>
      )}
    </ul>
  );
}
