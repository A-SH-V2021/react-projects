import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import image from "../images/img-3.jpg";

const Services = () => {
  return (
    <>
      <Header />
      <Hero image={image} title="services page" desc="whitout description" />
      <h2>services</h2>
    </>
  );
};

export default Services;
