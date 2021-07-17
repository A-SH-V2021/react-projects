import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./Data";

const Reveiw = () => {
  const [index, setIndex] = useState(2);
  

  const { name, job, image, text } = people[index];

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const nextHandle = () => {
    setIndex((index) => {
      checkNumber(index);
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prevHandle = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomHandle = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h3 className="author">{name}</h3>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevHandle}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextHandle}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomHandle}>
        random person
      </button>
    </article>
  );
};

export default Reveiw;
