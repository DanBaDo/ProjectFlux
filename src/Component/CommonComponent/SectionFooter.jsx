import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import styled from "styled-components";

const SectionFooter = () => {
  const StyledTitle = styled.h1``;
  const StyledText = styled.p`
  text-align:center;
  `;
  const StyledListItem = styled.li`
    list-style: none;
  `;
  return (
    <>
      <Container 
        fluid 
        className="bg-dark text-white">
        <Row>
          <Col>

          
          </Col>
          <Col>
            <StyledTitle>Contactanos</StyledTitle>
            <ul>
              <StyledListItem>123-456-789</StyledListItem>
              <StyledListItem>myEmail@gmail.com</StyledListItem>
            </ul>
            <p>Puedes contactar con nostros para cualquier duda</p>
          </Col>
        </Row>
        <Row>
          <StyledText>cafe Bar el reencuentro, 2023</StyledText>
        </Row>
      </Container>
    </>
  );
};

export default SectionFooter;
