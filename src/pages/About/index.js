import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Profile from "../../assets/images/backgrounds/jennypic.jpg";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import resume from "../../assets/info/JTrevizoResume(June)1.pdf";
import HomeButton from "../../components/HomeButton";
import "./styles.css";

export default function About() {
  const navigate = useNavigate();
  return (
    <Parallax id="about" pages={window.innerWidth < 768 ? 3.8 : 2.4}>
      <ParallaxLayer factor={0.5}>
        <Container fluid className="wait-show">
          <HomeButton />
          <Row className="d-flex justify-content-center align-items-end mx-sm-5 mx-3 about-content">
            <h2 className="about-header d-block d-md-none">
              {" "}
              I'm Jenny Trevizo.
            </h2>
            <Col className="h-100 col-12 col-md-4 col-xl-5 order-md-2 m-3 d-flex justify-content-end py-3 py-md-5">
              <img src={Profile} className="w-100 py-md-5" alt="" />
            </Col>
            <Col className="d-flex flex-column mx-0 mx-sm-3">
              <h2 className="about-header d-none d-md-block mb-3">
                I'm Jenny Trevizo.
              </h2>
              <p className="about-text">
                I’m a Full Stack Developer based in Houston, Texas. After a lot
                of self-taught small projects and a grueling development
                bootcamp, I can now say I am a full stack developer. I am
                excited to be part of an industry where I'm constantly learning
                and adding to my skillset. My past experience working with
                clients has taught me the ability to build strong relationships
                clients and I believe that has shaped me to be a well-rounded
                developer who not only writes efficient code but also
                understands the bigger picture of creating solutions that align
                with clients' goals.
              </p>
              <Button
                onClick={() => navigate("/contact", { replace: true })}
                className="d-block contact-button btn-warning align-self-md-end mt-2"
              >
                Contact
              </Button>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        offset={window.innerWidth < 768 ? 1.9 : 1.3}
        speed={0.5}
        factor={1.5}
      >
        <Container fluid className="p-md-5 p-3 wait-show">
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
                      Freelance web developer with a focus on serving the
                      service industry. Proficient in front-end and back-end
                      programming, including HTML, CSS, JavaScript, and React.
                      Specializing in creating user-friendly and visually
                      appealing websites tailored to the unique needs of
                      service-based businesses. A collaborative and adaptable
                      professional, dedicated to understanding clients' visions
                      and delivering innovative digital solutions that exceed
                      expectations.{" "}
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
                      Counseled students learning front and back end programming
                      languages and technologies including: Javascript, HTML,
                      CSS, React, MongoDB, MySQL, Node, Express, GraphQL.
                      Leveraged my expertise to research and resolve complex
                      technical issues, enabling students to gain a deeper
                      understanding of programming concepts and techniques.
                      Provided comprehensive feedback on student code, offering
                      personalized guidance to troubleshoot errors and optimize
                      performance. Fostered a culture of excellence and
                      efficiency by promoting best practices and encouraging
                      students to develop their skills through continuous
                      learning and practice.{" "}
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
                  <Button
                    className="d-block btn-warning resume-button my-3 mx-md-4"
                    href={resume}
                    rel="noreferrer"
                    target="_blank"
                  >
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
