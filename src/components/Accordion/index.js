import ProjectData from "../../assets/info/projects";
import AccordionItem from "./AccordionItem";

import "./styles.css";

export default function Accordion() {
  return (
    <div id="accordion" className="wait-show">
      {ProjectData.map((project, i) => (
        <AccordionItem {...project} key={i} />
      ))}
    </div>
  );
}
