import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import image from "../images/img-3.jpg";
import { motion } from "framer-motion";
import { animationsThree } from "../Animations";

const Services = () => {
  return (
    <motion.div initial="out" animate="end" exit="out" variants={animationsThree}>
      <Header />
      <Hero image={image} title="services page" desc="whitout description" />
      <h2>services</h2>
    </motion.div>
  );
};

export default Services;
