import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const LayoutImg = () => {
  return (
    <Container>
      <Row md={4} xs={12} className="justify-content-center m-4">
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
      </Row>
      <Row md={4} xs={12} className="justify-content-center m-4">
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
      </Row>
      <Row md={4} xs={12} className="justify-content-center m-4 "> 
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
        <Col className="m-2">
          <img src="https://via.placeholder.com/250" alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default LayoutImg;
