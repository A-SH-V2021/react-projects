import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import image from "../images/img-2.jpg";
import { motion } from "framer-motion";
import { animationsTwo, transition } from "../Animations";

const About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationsTwo}
      >
      <Header />
      <Hero image={image} title="about page" desc="look at this" />
      <h2>about</h2>
    </motion.div>
  );
};

export default About;
