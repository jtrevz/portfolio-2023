import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import contract from "../../assets/images/contractSample.png";
import cardInput from "../../assets/images/cardInput.png";
import layout from "../../assets/images/home-page.png";
import clientImg from "../../assets/images/clientImg.png";
import "./styles.css";

export default function AutoForm() {
  return (
    <Parallax id="autoform" className="bg-light" pages={10}>
      <ParallaxLayer sticky={{ start: 0, end: 10 }}>
        <Container fluid className="px-0">
          <Row>
            <Col
              id="auto-form-title"
              xs={12}
              className="py-3 py-md-3 bg-danger"
            >
              <h1 className="bricolage px-5 text-end text-light">AutoForm</h1>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        speed={0.6}
        factor={1}
        sticky={{ start: 0, end: 0.2 }}
        className="d-flex align-items-md-center contract-parallax align-items-start"
      >
        <Container fluid>
          <Row>
            <Col
              xs={8}
              md={6}
              lg={6}
              className="ps-5 d-flex justify-content-center "
            >
              <div className="contract-container">
                <Image src={contract} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer className="" speed={0.5} offset={0.3} factor={0.2}>
        <Container fluid>
          <Row className="d-flex justify-content-end">
            <Col xs={6} lg={6} className="d-flex justify-content-center">
              <div className="sub-box">
                <h2 className="text-center sub-heading-a ">
                  Autocomplete to fascilitate form creation
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className="" speed={0.4} offset={0.6} factor={0.2}>
        <Container fluid>
          <Row className="d-flex justify-content-md-end">
            <Col xs={6} lg={6} className="d-flex justify-content-center">
              <div className="sub-box-1 sub-box">
                <h3
                  id="subC1"
                  className="text-center  text-secondary  sub-headings-c"
                >
                  Built for a client in construction. Allows them to easily
                  create estimate forms without the hassle of having to format.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        speed={1}
        factor={1}
        sticky={{ start: 1.2, end: 1.5 }}
        className="d-flex align-items-center contract-parallax"
      >
        <Container fluid>
          <Row className="d-flex  justify-content-md-end">
            <Col
              xs={12}
              md={6}
              xl={6}
              xxl={7}
              className="p-5 d-flex justify-content-center"
            >
              <div className="contract-container">
                <Image src={cardInput} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer className="" speed={0.4} offset={1.8} factor={0.3}>
        <Container fluid>
          <Row className="d-flex ">
            <Col
              xs={12}
              md={7}
              xl={7}
              className="d-flex justify-content-center"
            >
              <div className="sub-box">
                <h2 className="text-center sub-headings-b">
                  Generates autocomplete options based on past user input
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer
        speed={1}
        factor={1}
        sticky={{ start: 2.8, end: 3.3 }}
        className="d-flex align-items-md-center contract-parallax align-items-start"
      >
        <Container fluid>
          <Row>
            <Col xs={6} lg={7} className="ps-5 d-flex justify-content-center ">
              <div className="contract-container-home">
                <Image src={layout} fluid />
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className="" speed={0.35} offset={3.2} factor={0.3}>
        <Container fluid>
          <Row className="d-flex justify-content-md-end">
            <Col
              xs={6}
              lg={6}
              xl={5}
              xxl={5}
              className="d-flex justify-content-center"
            >
              <div className="sub-box">
                <h2 className="text-center sub-headings-b">
                  Past contracts saved and displayed in home page.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className="" speed={0.3} offset={3.35} factor={0.2}>
        <Container fluid>
          <Row className="d-flex justify-content-md-end">
            <Col
              xs={6}
              lg={6}
              xl={5}
              xxl={5}
              className="d-flex justify-content-center"
            >
              <div className="sub-box">
                <h3 className="text-center sub-headings-c text-secondary">
                  Ability to view, or download contracts directly from home
                  page.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer
        speed={1}
        factor={1}
        sticky={{ start: 3.9, end: 4.2 }}
        className="d-flex align-items-center contract-parallax"
      >
        <Container fluid>
          <Row className="d-flex  justify-content-md-end">
            <Col
              xs={12}
              md={6}
              xl={6}
              xxl={7}
              className="p-5 d-flex justify-content-center"
            >
              <div className="contract-container">
                <Image src={clientImg} fluid />
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>

      <ParallaxLayer className="" speed={0.35} offset={4.5} factor={0.3}>
        <Container fluid>
          <Row className="d-flex">
            <Col
              xs={12}
              md={7}
              xl={7}
              className="d-flex justify-content-center"
            >
              <div className="sub-box">
                <h2 className="text-center sub-headings-b">
                  Client contact page stores past clients for future reference.
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
      <ParallaxLayer className="" speed={0.3} offset={4.7} factor={0.2}>
        <Container fluid>
          <Row className="d-flex">
            <Col
              xs={12}
              md={7}
              xl={7}
              className="d-flex justify-content-center"
            >
              <div className="sub-box">
                <h3 className="text-center sub-headings-c text-secondary">
                  Ability to edit and delete past client information.
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </ParallaxLayer>
    </Parallax>
  );
}
