import React from "react";
import { Container } from "react-bootstrap";

const SectionGoogleMap = () => {
  return (
    <Container>
      <iframe
        title="google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.296080808597!2d-5.656372184910334!3d40.97499707930411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f27957f46155d%3A0xe7b8bd1bef5d9b81!2sEl%20reencuentro%20caf%C3%A9%20-%20bar!5e0!3m2!1ses!2ses!4v1645198582588!5m2!1ses!2ses"
        width="100%"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </Container>
  );
};

export default SectionGoogleMap;
