import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeButton from "../../components/HomeButton";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Accordion from "../../components/Accordion/";

import "./styles.css";

export default function Work() {
  return (
    <Parallax id="work" pages={2}>
      <ParallaxLayer factor={1.5} speed={0.5}>
        <Container fluid className="wait-show">
          <HomeButton />
          <Row className="wait-show d-flex justify-content-start px-5 mb-md-0 mb-5 ">
            <h2 className="work-title">Work</h2>
          </Row>
          <Row className="d-flex justify-content-md-end justify-content-center mx-3 wait-work-show">
            <Accordion />
          </Row>
        </Container>
      </ParallaxLayer>
    </Parallax>
  );
}
