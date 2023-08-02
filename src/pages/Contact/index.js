import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ContactNav from "../../components/ContactNav";
import { Github, Linkedin, Pin, Pinterest } from "react-bootstrap-icons";
import "./styles.css";

export default function Contact() {
  return (
    <Container fluid id="contact" className="">
      <Row className="d-flex m-0 pt-3">
        <Col className="p-4">
          <h3 className="contact-name">Jennifer Trevizo</h3>
        </Col>
        <Col>
          <ContactNav />
        </Col>
      </Row>
      <Row>
        <Col className="px-5">
          <h1 className="contact-heading">
            Get in
            <br /> touch
          </h1>
        </Col>
      </Row>
      <Row className="bottom p-5 mb-5 d-flex justify-content-between w-100">
        <Col className="social-groups">
          <h4 className="m-0">Email</h4>
          <h5 className="soc-links">
            <a href="mailto:jennytrevizo18@gmail.com">
              jennytrevizo18@gmail.com
            </a>
          </h5>
        </Col>
        <Col className="social-groups">
          <h4 className="m-0">Phone</h4>
          <h5 className="soc-links">
            <a href="tel:+17133825761">713-382-5761</a>
          </h5>
        </Col>
        <Col className="social-groups">
          <h4 className="m-0">Socials</h4>
          <h5 className="soc-links">
            <a className="pe-2" href="https://github.com/jtrevz">
              <span>
                <Github size={20} />
              </span>
            </a>
            <a
              className="px-2"
              href="https://www.linkedin.com/in/jennifertrevizo/"
            >
              <span>
                <Linkedin size={20} />
              </span>
            </a>
            <a className="px-2" href="https://www.pinterest.com/jennytrevizo/">
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
