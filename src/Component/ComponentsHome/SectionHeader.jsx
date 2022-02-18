import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
const SectionHeader = () => {
  const ContainerTitle = styled.div`
  text-align:center;
  margin:0 auto;
  `
  return (
    <>
      <Container>
        <ContainerTitle>
          <h1>Este es el bar nueva imagen</h1>
          <p>Seleciona una de las dos botones para ver que desees tomar</p>
        </ContainerTitle>
      </Container>
    </>
  );
};

export default SectionHeader;
