import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/info/JTrevizoResume(June)1.pdf";
import "./styles.css";

export default function MainNav() {
  return (
    <div>
      <nav className="d-none d-sm-none d-md-none d-lg-inline-flex float-end m-3 mx-5">
        <Link to="about" className="nav-link px-2">
          ABOUT
        </Link>
        <Link to="/work" className="nav-link px-2">
          WORK
        </Link>
        <Link to="/resume" className="nav-link px-2">
          RESUME
        </Link>

        <a
          href={resume}
          rel="noreferrer"
          target="_blank"
          className="nav-link px-2"
        >
          RESUME
        </a>
      </nav>
    </div>
  );
}
