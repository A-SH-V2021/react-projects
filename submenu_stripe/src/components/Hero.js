import React from "react";
import phoneImg from "../images/phone.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <article className='hero-info'>
          <h1>it is just test project of react</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, nihil obcaecati! Alias molestiae, ratione at similique vero quis dolorum eius est illum adipisci voluptatum unde laboriosam facilis, perspiciatis quasi quibusdam!</p>
          <button className="btn">start</button>
        </article>
        <article className='hero-images'>
          <img src={phoneImg} alt="phone" className='phone-img'/>
        </article>
      </div>
    </section>
  );
};

export default Hero;
