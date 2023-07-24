import React, { useState, useRef } from "react";
import { Container, Col, Row } from "react-bootstrap";
import circleAnimation from "./animation";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffNav from "../../components/OffNav/index.js";
import List from "../../assets/icons/list";
import "./style.css";

export default function Landing() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);

  const handleClose = () => {
    setShow(false);
    setHide(false);
  };
  const handleShow = () => {
    setShow(true);
    setHide(true);
  };
  return (
    <Container fluid id="landing" className="p-0 m-0">
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
      <Row>
        <Offcanvas
          className="offcanvas-end w-50 nav-back px-0 pt-2 d-lg-none"
          placement="end"
          scroll="show"
          backdrop="false"
          show={show}
          onHide={handleClose}
          id="offcanvas"
        >
          <Offcanvas.Header
            className="d-flex justify-content-end"
            closeButton
          ></Offcanvas.Header>
          <Offcanvas.Body className="px-0">
            <OffNav></OffNav>
          </Offcanvas.Body>
        </Offcanvas>
        <Container fluid>
          <Row className="d-flex w-100">
            <Col className="py-3 px-0 justify-content-end">
              <Button
                className={
                  "btn float-end nav-btn d-lg-none " + (hide ? "hide" : "")
                }
                role="button"
                variant="link"
                onClick={handleShow}
              >
                <List />
              </Button>
            </Col>
          </Row>
        </Container>
      </Row>
    </Container>
  );
}
