import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import image from "../images/img-2.jpg";

const About = () => {
  return (
    <>
      <Header />
      <Hero image={image} title='about page' desc='look at this'/>
      <h2>about</h2>
    </>
  );
};

export default About;
