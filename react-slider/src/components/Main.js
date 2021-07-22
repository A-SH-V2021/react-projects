import React from "react";
import { FaQuoteRight } from "react-icons/fa";

const Main = ({idx,persons}) => {
  return (
    <div>
      {persons.map((item, personIdx) => {
        const { id, name, title, image, quote } = item;

        let position = "nextSlide";

        if (personIdx === idx) {
          position = "activeSlide";
        }

        if (
          personIdx === idx - 1 ||
          (idx === 0 && personIdx === persons.length - 1)
        ) {
          position = "lastSlide";
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
    </div>
  );
};

export default Main;
