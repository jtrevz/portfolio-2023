import React, { useState } from "react";
import { ArrowUpRight } from "react-bootstrap-icons";

import "./styles.css";

const ProjectData = {
  name: "Studious",
  type: "Personal Project",
  description:
    "Developed and deployed a front end web application to help users make and study flashcards",
  tech: "React, Express, Node, Firebase",
};

export default function Accordion() {
  const [active, setActive] = useState(false);

  const { name, type, description, tech } = ProjectData;

  return (
    <div id="accordion">
      <div className="accordion-item border-top border-bottom py-3 px-1">
        <div
          className="accordion-name-box d-flex flex-row align-items-center"
          onClick={() => setActive(!active)}
        >
          <div className="col accordion-name">{name}</div>
          <div className="col type">{type}</div>
          <div className="col-1 controller">{active ? "-" : "+"}</div>
        </div>
        {active && (
          <div className="accordion-desc container-fluid px-0 mt-3">
            <div className="d-flex flex-row">
              <div className="col-7 desc-text">{description}</div>
              <div className="col">picture</div>
            </div>
            <div className="d-flex flex-row pt-3">
              <div className="col-7 desc-text">{tech}</div>
              <div className="col d-flex flex-row justify-content-end px-2">
                <div className="px-2 site-links">
                  Github{" "}
                  <span>
                    <ArrowUpRight />
                  </span>
                </div>
                <div className="px-2 site-links">
                  Livesite{" "}
                  <span>
                    <ArrowUpRight />
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
