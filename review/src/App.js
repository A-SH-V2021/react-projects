import React from "react";
import Reveiw from "./Reveiw";

const App = () => {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>reviews </h2>
          <div className="underline"></div>
        </div>
        <Reveiw />
      </section>
    </main>
  );
};

export default App;
