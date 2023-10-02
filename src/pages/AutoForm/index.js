import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

export default function AutoForm() {
  return (
    <Parallax id="autoform" pages={2}>
      <ParallaxLayer factor={0.5}>
        <Container fluid>
          <Row>
            <Col>
              <h2>AutoForm</h2>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </ParallaxLayer>
    </Parallax>
  );
}
