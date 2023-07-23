import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import circleAnimation from "./animation";
import "./style.css";

export default function Landing() {
  return (
    <Container fluid id="landing" className="p-0">
      <Row className="w-100 container-fluid">
        <Col className="oval-container">
          {circleAnimation().map((oval, i) => (
            <div
              key={i}
              className="oval"
              style={{
                width: `${oval.w}`,
                height: `${oval.h}`,
                margin: `${oval.m}`,
                animation: `${oval.a}`,
              }}
            ></div>
          ))}
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
