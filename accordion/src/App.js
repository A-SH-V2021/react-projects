import React, { useState } from "react";
import data from "./Data";
import Questions from "./Questions";


const App = () => {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions & answers</h3>
        <section className="info">
          {questions.map((item) => {
            return <Questions key={item.key} {...item} />;
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
