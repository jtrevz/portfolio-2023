import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UpRight from "../../assets/icons/up-right";
import "./styles.css";

export default function About() {
  return (
    <Container fluid id="about">
      <Row className="d-flex justify-content-end align-items-center p-4">
        <Link className="text-end home-link" to="/">
          Home
          <span className="p-2">
            <UpRight />
          </span>
        </Link>
      </Row>
      <Row className="d-flex justify-content-center align-items-end mx-5 about-content">
        <h2 className="about-header d-block d-md-none"> I'm Jenny Trevizo.</h2>
        <Col className="h-100 col-12 col-md-4 order-md-2 m-3 d-flex justify-content-end">
          PICTURE
        </Col>
        <Col className="d-flex flex-column mx-3">
          <h2 className="about-header d-none d-md-block mb-3">
            I'm Jenny Trevizo.
          </h2>
          <p className="about-text">
            I've always been drawn to math, puzzles, and riddles, enjoying the
            challenge of solving problems and understanding how things work.
            During the pandemic, I revisited HTML and CSS, but it was when I
            started working with JavaScript that I felt like I found the missing
            piece of a puzzle, leading me to become a developer.
            <br /> <br />
            After self-taught projects and a development bootcamp, I am now a
            full stack developer. I find excitement in constantly learning and
            expanding my skillset. My experience with clients taught me to build
            strong relationships and be a well-rounded developer, focusing on
            efficient code and creating solutions that align with clients'
            goals.
          </p>
          <Button className="btn-md-block contact-button btn-warning align-self-end">
            Contact
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
