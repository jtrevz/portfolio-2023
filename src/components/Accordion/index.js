import React, { useState } from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import ProjectData from "../../assets/info/projects";
import AccordionItem from "./AccordionItem";

import "./styles.css";

export default function Accordion() {
  return (
    <div id="accordion">
      {ProjectData.map((project) => (
        <AccordionItem {...project} />
      ))}
    </div>
  );
}
