import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import List from "../../assets/icons/list";
import OffNav from "../../components/OffNav";
import { Offcanvas } from "react-bootstrap";
import ContactNav from "../../components/ContactNav";
import { Github, Linkedin, Pinterest } from "react-bootstrap-icons";
import "./styles.css";

export default function Contact() {
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
    <Container fluid id="contact" className="">
      <Row className="d-flex m-0 pt-3 pt-xxl-4">
        <Col className="col-8 col-md-4 p-4 px-xxl-5">
          <h3 className="contact-name">Jennifer Trevizo</h3>
        </Col>
        <Col>
          <ContactNav />
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
        </Col>
      </Row>
      <Row className="px-xxl-4">
        <Col className="px-5">
          <h1 className="contact-heading">
            Get in
            <br /> touch
          </h1>
        </Col>
      </Row>
      <Row className="bottom p-5 pe-sm-3 p-md-5 mb-5 mx-xxl-3 d-flex w-100 justify-content-between">
        <Col className="social-groups col-12 col-sm-4 ps-sm-0 py-1 py-md-3">
          <h4 className="m-0">Email</h4>
          <h5 className="soc-links">
            <a href="mailto:jennytrevizo18@gmail.com">
              jennytrevizo18@gmail.com
            </a>
          </h5>
        </Col>
        <Col className="social-groups col-12 col-sm-3 py-1 py-md-3">
          <h4 className="m-0">Phone</h4>
          <h5 className="soc-links">
            <a href="tel:+17133825761">713-382-5761</a>
          </h5>
        </Col>
        <Col className="social-groups col-12 col-sm-3 pt-1 pt-md-33">
          <h4 className="m-0">Socials</h4>
          <h5 className="soc-links pt-3 pt-sm-0">
            <a
              className="pe-4 pe-sm-2 pe-xxl-3"
              href="https://github.com/jtrevz"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <Github size={20} />
              </span>
            </a>
            <a
              className="px-4 px-sm-2 px-xxl-3 "
              href="https://www.linkedin.com/in/jennifertrevizo/"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <Linkedin size={20} />
              </span>
            </a>
            <a
              className="px-4 px-sm-2  px-xxl-3"
              href="https://www.pinterest.com/jennytrevizo/"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                <Pinterest size={20} />
              </span>
            </a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
}
