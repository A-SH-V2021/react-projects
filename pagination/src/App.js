import React, { useState, useEffect } from "react";
import { useFetch } from "./component/useFetch";
import Follower from "./component/Followers";

const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
  console.log(data);
  const pageHandle = (idx) => {
    setPage(idx);
  };
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((items) => {
            return <Follower key={items.id} {...items} />;
          })}
        </div>

        {!loading && (
          <div className="btn-container">
            {data.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className={`page-btn ${idx === page ? "active-btn" : null}`}
                  onClick={() => pageHandle(idx)}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
