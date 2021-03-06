import React, { useState, useEffect } from "react";

import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/women/63.jpg";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("random user");

  const hoverHandle = (e) => {
    
    if (e.target.classList.contains('icon')) {
     const newValue=e.target.dataset.lable
    setTitle(newValue)
     setValue(person[newValue])
    }
  };
  const fetchHandle = async () => {
    const response = await fetch(url);
    const data = await response.json();
    const person = data.results[0];
    const {
      picture: { large: image },
    } = person;
    const {
      name: { first, last },
    } = person;
    const {
      location: {
        street: { name: nameStr, number: numStr },
      },
    } = person;
    const {
      dob: { age },
    } = person;
    const { email, phone } = person;
    const newPerson = {
      image,
      name: `${first} ${last}`,
      street: `${numStr} ${nameStr}`,
      age,
      email,
      phone,
    };
    setPerson(newPerson);
    setLoading(false);
    // setTitle('name')
    setValue(newPerson.name);
  };

  useEffect(() => {
    fetchHandle();
  }, []);

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt="random-img"
            className="user-img"
          />
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value} </p>
          <div className="values-list">
            <button
              className="icon"
              data-lable="name"
              onMouseOver={hoverHandle}
            >
              <FaUser />
            </button>
            <button
              className="icon"
              data-lable="email"
              onMouseOver={hoverHandle}
            >
              <FaEnvelopeOpen />
            </button>
            <button className="icon" data-lable="age" onMouseOver={hoverHandle}>
              <FaCalendarTimes />
            </button>
            <button
              className="icon"
              data-lable="street"
              onMouseOver={hoverHandle}
            >
              <FaMap />
            </button>
            <button
              className="icon"
              data-lable="phone"
              onMouseOver={hoverHandle}
            >
              <FaPhone />
            </button>
          </div>
          <button className="btn" type="button" onClick={fetchHandle}>
            {loading ? "loadin..." : "random user"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default App;
