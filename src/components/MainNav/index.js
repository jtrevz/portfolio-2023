import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function MainNav() {
  return (
    <div>
      <nav className="d-none d-sm-none d-md-none d-lg-inline-flex float-end m-3 mx-5">
        <Link to="about" className="nav-link px-2" href="/about.html">
          ABOUT
        </Link>
        <Link className="nav-link px-2">EXPERIENCE</Link>
        <Link className="nav-link px-2">RESUME</Link>
        <Link className="nav-link px-2">CONTACT</Link>
        <Link className="nav-link px-2">WORK</Link>
      </nav>
    </div>
  );
}
