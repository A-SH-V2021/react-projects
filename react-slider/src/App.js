import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Header from "./components/Header";
import Main from "./components/Main";
import Button from "./components/Button";
import Footer from "./components/Footer";

const App = () => {
  const [persons] = useState(data);
  const [idx, setIdx] = useState(0);

  const incrementHandle = () => {
    const lastItem = persons.length - 2;
    if (idx > lastItem) {
      return setIdx(0);
    }
    setIdx(idx + 1);
  };

  const decrementHandle = () => {
    const lastItem = persons.length - 1;

    if (idx === 0) {
      return setIdx(lastItem);
    }
    setIdx(idx - 1);
  };

  useEffect(() => {
    let handle = setInterval(() => {
      const lastItem = persons.length - 2;
      if (idx > lastItem) {
        return setIdx(0);
      }
      setIdx(idx + 1);
    }, 3000);
    return () => {
      clearInterval(handle);
    };
  }, [idx]);

  return (
    <section className="section">
      <Header />
      <div className="section-center">
        <Main idx={idx} persons={persons} />
        <Button classes={`prev`} clickHandle={decrementHandle}>
          <FiChevronLeft />
        </Button>
        <Button classes={`next`} clickHandle={incrementHandle}>
          <FiChevronRight />
        </Button>
      </div>
      <Footer/>
    </section>
  );
};

export default App;
