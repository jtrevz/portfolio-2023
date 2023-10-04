import React from "react";
import { Link } from "react-router-dom";
import resume from "../../assets/info/JTrevizoResume(Sept)2.pdf";

export default function ContactNav() {
  return (
    <nav className="d-none d-sm-none d-md-none d-lg-inline-flex p-4 float-end justify-content-end">
      <Link to="/" className="nav-link px-2">
        HOME
      </Link>
      <Link to="/about" className="nav-link px-2" href="/about.html">
        ABOUT
      </Link>
      <Link to="/work" className="nav-link px-2">
        WORK
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
  );
}
