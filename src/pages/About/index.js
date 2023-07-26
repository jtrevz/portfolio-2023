import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import UpRight from "../../assets/icons/up-right";
import "./styles.css";

export default function About() {
  return (
    <Parallax id="about" pages={2.5}>
      <ParallaxLayer factor={0.5}>
        <Container fluid>
          <Row className="f-row d-flex justify-content-end align-items-center pt-2 pt-4 p-sm-4 mb-5 mb-sm-0">
            <Link className="text-end home-link" to="/">
              Home
              <span className="p-1 p-sm-2">
                <UpRight />
              </span>
            </Link>
          </Row>
          <Row className="d-flex justify-content-center align-items-end mx-sm-5 mx-3 about-content">
            <h2 className="about-header d-block d-md-none">
              {" "}
              I'm Jenny Trevizo.
            </h2>
            <Col className="h-100 col-12 col-md-4 col-xl-5 order-md-2 m-3 d-flex justify-content-end">
              PICTURE
            </Col>
            <Col className="d-flex flex-column mx-0 mx-sm-3">
              <h2 className="about-header d-none d-md-block mb-3">
                I'm Jenny Trevizo.
              </h2>
              <p className="about-text">
                I've always been drawn to math, puzzles, and riddles, enjoying
                the challenge of solving problems and understanding how things
                work. During the pandemic, I revisited HTML and CSS, but it was
                when I started working with JavaScript that I felt like I found
                the missing piece of a puzzle, leading me to become a developer.
                <br /> <br />
                After self-taught projects and a development bootcamp, I am now
                a full stack developer. I find excitement in constantly learning
                and expanding my skillset. My experience with clients taught me
                to build strong relationships and be a well-rounded developer,
                focusing on efficient code and creating solutions that align
                with clients' goals.
              </p>
              <Button className="d-block contact-button btn-warning align-self-md-end mt-2">
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.5} factor={1.5}>
        <Container fluid className="p-md-5 p-3">
          <Row className="mt-md-5 my-3">
            <h2 className="about-header px-md-5 pb-2">Experience</h2>
          </Row>
          <Row className="d-flex justify-content-end">
            <Col className="col-12 col-md-10">
              <Container fluid className="py-2 py-md-3 ">
                <Row className="my-2">
                  <Col>
                    <h4 className="text-end px-4 profession-titles">
                      2022-2023
                    </h4>
                  </Col>
                  <Col className="col-8">
                    <h4 className="profession-titles">
                      Freelance Web Development
                    </h4>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col></Col>
                  <Col className="col-8">
                    <p>
                      This past year, I have been building my career as a
                      freelance makeup artist. I have earned a large client base
                      from my reputation of being artistic and professional. I
                      have delivered an assortment of looks for formal events
                      such as weddings and corporate celebrations. Creative
                      agencies and photographers have also worked with me as a
                      makeup artist for their photo shoots.{" "}
                    </p>
                  </Col>
                </Row>
                <Row className="my-2">
                  <Col>
                    <h4 className="text-end px-4 profession-titles">2024</h4>
                  </Col>
                  <Col className="col-8">
                    <h4 className="profession-titles">
                      Full Stack Development Teaching Assistant
                    </h4>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col></Col>
                  <Col className="col-8">
                    <p>
                      This past year, I have been building my career as a
                      freelance makeup artist. I have earned a large client base
                      from my reputation of being artistic and professional. I
                      have delivered an assortment of looks for formal events
                      such as weddings and corporate celebrations. Creative
                      agencies and photographers have also worked with me as a
                      makeup artist for their photo shoots.{" "}
                    </p>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <h3 id="edu-title">Education</h3>
                  </Col>
                </Row>
                <Row className="">
                  <Col>
                    <h4 className="text-end px-4 profession-titles">2021</h4>
                  </Col>
                  <Col className="col-8">
                    <h4 className="profession-titles">
                      Full Stack Development Bootcamp Certificate
                    </h4>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col></Col>
                  <Col className="col-8">
                    <p>University of Texas at Austin, EdX</p>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <h4 className="text-end px-4 profession-titles">2021</h4>
                  </Col>
                  <Col className="col-8">
                    <h4 className="profession-titles">
                      Bachelor's In Psychology
                    </h4>
                  </Col>
                </Row>
                <Row className="mb-2">
                  <Col></Col>
                  <Col className="col-8">
                    <p>University of Texas at Austin, EdX</p>
                  </Col>
                </Row>
                <Row className="d-flex justify-content-end">
                  <Button className="d-block btn-warning resume-button my-3 mx-md-4">
                    Resume
                  </Button>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
    </Parallax>
  );
}
