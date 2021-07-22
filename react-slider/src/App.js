import React, { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";

const App = () => {
  const [persons, setPersons] = useState(data);
  const [idx, setIdx] = useState(0);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>review
        </h2>
      </div>
      <div className="section-center">
        {persons.map((item, personIdx) => {
          const { id, name, title, image, quote } = item;

          let position = 'nextSlide'
          if (personIdx === idx) {
            position="activeSlide"
          }
          
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4 className="">{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <button className="prev">
          <FiChevronLeft />
        </button>
        <button className="next">
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
};

export default App;
