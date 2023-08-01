import React, { useState } from "react";
import { ArrowUpRight } from "react-bootstrap-icons";
import { ChevronDown } from "react-bootstrap-icons";
import { useSpring, animated } from "react-spring";

import "./styles.css";

export default function AccordionItem({ name, type, description, tech }) {
  const [active, setActive] = useState(false);

  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "70px" },
    to: { opacity: "1", maxHeight: active ? "400px" : "70px" },
    config: { duration: "300" },
  });

  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: active ? "rotate(180deg)" : "rotate(0deg)",
    },
    config: { duration: "120" },
  });

  return (
    <animated.div
      className="accordion-item border-top border-bottom py-md-3 py-4 px-1"
      style={openAnimation}
      key={name}
    >
      <div
        className="accordion-name-box d-flex flex-row align-items-center"
        onClick={() => setActive(!active)}
      >
        <div className="col accordion-name">{name}</div>
        <div className="col type">{type}</div>
        <div className="col-1">
          <animated.i
            className="d-inline-block chevron-icon"
            style={iconAnimation}
          >
            <ChevronDown />
          </animated.i>
        </div>
      </div>

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
    </animated.div>
  );
}
