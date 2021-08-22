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
  const [page, setPage] = useState(2);
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    let url;
    let urlPage = `&page=${page}`;
    let urlQuery = `&query=${query}`;
    if (query) {
      url = `${searchURL}${clientID}${urlPage}${urlQuery}`;
    } else {
      url = `${mainURL}${clientID}${urlPage}`;
    }

    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      setPhotos((oldData) => {
        if (query && page === 1) {
          return data.results;
        }
        if (query) {
          return [...oldData, ...data.results];
        } else {
          return [...oldData, ...data];
        }
      });

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const position = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });

    return () => window.removeEventListener("scroll", position);
  }, []);

  const submitHandle = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            className="form-input"
            placeholder="SEARCH"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="submit-btn" onClick={submitHandle}>
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((item) => {
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
