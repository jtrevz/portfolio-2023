import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles.css";

export default function Work() {
  return (
    <Parallax>
      <ParallaxLayer id="work"></ParallaxLayer>
    </Parallax>
  );
}
