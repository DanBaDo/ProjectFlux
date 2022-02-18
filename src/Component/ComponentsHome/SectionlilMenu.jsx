import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

const SectionlilMenu = () => {
  const StyledButton = styled.div`
  padding:5%;
  background-color:#000;
  text-align:center;
  font-size:5em;
  color:#fff;
  `;
  return (
    <Container className="py-5">
      <Row>
        <Col md={6} xs={12} className="my-1">
          <StyledButton>Food
          
          </StyledButton>
        </Col>
        <Col md={6} xs={12} className="my-1">
          <StyledButton>Drink

          
          </StyledButton>
        </Col>
      </Row>
    </Container>
  );
};

export default SectionlilMenu;
