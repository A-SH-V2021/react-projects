import React from "react";
import styled from "styled-components";

const Hero = ({ image,title,desc }) => {
  return (
    <Section image={image}>
      <Container>
        <h1>{title}</h1>
        <p>{desc}</p>
        <button>more information</button>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  background: url(${({ image }) => image && image});
  background-position: center;
  height: 100vh;
  display: flex;
  margin-top: -60px;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Container = styled.div`
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2rem;
  border-radius: 10px;
  margin: 2rem;
  backdrop-filter: blur(5px);
  h1 {
    font-size: clamp(2rem, 8vw, 5rem);
    margin-bottom: 0.5rem;
  }
  p {
    font-size: clamp(1rem, 6vw, 2.5rem);
    margin-bottom: 1rem;
  }
  button {
    font-size: clamp(0.8rem, 4vw, 1.2rem);
    margin-bottom: 0.8rem;
    padding: 0.5rem 2rem;
    color: #000;
    background: #ffb347;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
  }
`;

export default Hero;
