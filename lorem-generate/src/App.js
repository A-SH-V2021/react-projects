import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  function submitHandle(e) {
    e.preventDefault();
    let amount = parseInt(number);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  }
 
  return (
    <section className="section-center">
      <h3>lorems jenerate</h3>
      <form className="lorem-form" onSubmit={submitHandle}>
        <label htmlFor="amount">paragraph</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn" type="submit">
          jenerate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, idx) => {
          return <p key={idx}>{item}</p>;
        })}
      </article>
    </section>
  );
};

export default App;
