import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./component/Photo";
import loader from "./Ripple-200px.gif";

const mainURL = "https://api.unsplash.com/photos/";
const searchURL = "https://api.unsplash.com/search/photos/";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_WEB}`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);

  const fetchData = async () => {
    const url = `${mainURL}${clientID}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input type="text" className="form-input" placeholder="SEARCH" />
          <button className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((item) => {
            console.log(item);
            return <Photo key={item.id} {...item} />;
          })}
        </div>
      </section>
      {loading && (
        <div className="loading">
          <img src={loader} alt="" />
        </div>
      )}
    </main>
  );
};

export default App;
