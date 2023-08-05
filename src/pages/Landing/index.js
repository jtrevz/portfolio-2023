import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import circleAnimation from "./animation";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import OffNav from "../../components/OffNav/index.js";
import MainNav from "../../components/MainNav";
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
    <div id="landing">
      <Container fluid className="w-100 h-100">
        <Row className="w-100 container-fluid wait-show">
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
        <Row className="wait-show">
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
                <MainNav></MainNav>
              </Col>
            </Row>
          </Container>
        </Row>
        <Container
          fluid
          className="wait-show name-container d-flex flex-column align-items-end main-container justify-content-end w-100 h-75 px-2 px-lg-5"
        >
          <div className="px-4">
            <h4 className="text-end profession">
              Full Stack Developer / <br />
              Web Designer
            </h4>
          </div>
          <div className="text-end px-4 full-name ">
            <h1>Jennifer Trevizo</h1>
          </div>
        </Container>
      </Container>
    </div>
  );
}
