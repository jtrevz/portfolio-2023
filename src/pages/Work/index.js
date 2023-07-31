import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HomeButton from "../../components/HomeButton";
import Accordion from "../../components/Accordion/";

import "./styles.css";

export default function Work() {
  return (
    <Container fluid id="work">
      <HomeButton />
      <Row className="d-flex justify-content-start px-5">
        <h2 className="work-title">Work</h2>
      </Row>
      <Row className="d-flex justify-content-end">
        <Accordion />
      </Row>
    </Container>
  );
}