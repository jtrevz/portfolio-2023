import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import contract from "../../assets/images/contractSample.png";
import cardInput from "../../assets/images/cardInput.png";
import "./styles.css";

export default function AutoForm() {
  return (
    <Parallax id="autoform" className="bg-light" pages={4}>
      <ParallaxLayer sticky={{ start: 0, end: 10 }}>
        <Container fluid className="px-0">
          <Row>
            <Col
              id="auto-form-title"
              md={6}
              lg={5}
              className="py-3 py-md-4 bg-danger"
            >
              <h1 className="bricolage text-center text-light">AutoForm</h1>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        speed={1}
        factor={2}
        offset={0.2}
        sticky={{ start: 0.2, end: 1.5 }}
        className="d-flex align-items-start align-items-md-center align-items-lg-end contract-parallax"
      >
        <Container fluid>
          <Row>
            <Col xs={12} lg={8} className="p-5 d-flex justify-content-center">
              <div className="contract-container">
                <Image src={contract} fluid />
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className=" s" speed={0.5} offset={0.2} factor={0.3}>
        <Container fluid>
          <Row className="d-flex justify-content-end">
            <Col xs={12} lg={5} className="">
              <div className="sub-box">
                <h2 className="text-center sub-heading-a">
                  Autocomplete to fascilitate form creation
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className=" s" speed={0.5} offset={1} factor={0.3}>
        <Container fluid>
          <Row className="d-flex justify-content-end">
            <Col xs={12} lg={5} className="">
              <div className="sub-box">
                <h2 className="text-center sub-headings-b">
                  Built for a client in construction that allows them to easily
                  create estimate forms without the hassle of having to format.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer
        speed={0.3}
        factor={1}
        sticky={{ start: 2.5, end: 3 }}
        className="d-flex align-items-center contract-parallax"
      >
        <Container fluid>
          <Row className=" d-flex justify-content-end">
            <Col xs={12} lg={7} className="p-5 d-flex justify-content-center">
              <div className="contract-container">
                <Image src={cardInput} fluid />
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className=" s" speed={0.5} offset={3} factor={0.3}>
        <Container fluid>
          <Row className="d-flex">
            <Col xs={12} lg={7} className=" d-flex justify-content-center">
              <div className="sub-box">
                <h2 className="text-center sub-headings-b">
                  Generates autocomplete options based on past user input
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
    </Parallax>
  );
}
