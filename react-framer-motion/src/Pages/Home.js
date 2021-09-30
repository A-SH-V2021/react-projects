import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import image from "../images/img-1.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Hero image={image} title="home page" desc="beutifull bird" />
    </>
  );
};

export default Home;
