import React from "react";
import "./styles.css";

export default function MainNav() {
  return (
    <div>
      <nav className="d-none d-sm-none d-md-none d-lg-inline-flex float-end m-3 mx-5">
        <a className="nav-link px-2" href="/about.html">
          ABOUT
        </a>
        <a className="nav-link px-2">EXPERIENCE</a>
        <a className="nav-link px-2">RESUME</a>
        <a className="nav-link px-2">CONTACT</a>
        <a className="nav-link px-2">WORK</a>
      </nav>
    </div>
  );
}
