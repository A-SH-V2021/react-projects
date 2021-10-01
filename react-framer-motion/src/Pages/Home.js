import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import image from "../images/img-1.jpg";
import { animationsOne, transition } from "../Animations/index";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationsOne}
      transformTemplate={transition}
    >
      <Header />
      <Hero image={image} title="home page" desc="beutifull bird" />
    </motion.div>
  );
};

export default Home;
