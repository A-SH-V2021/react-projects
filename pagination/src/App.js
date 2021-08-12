import React from "react";
import { useFetch } from "./component/useFetch";
import Follower from "./component/Followers";
const App = () => {
  const { loading, data } = useFetch();
  const { avatar_url } = data;
 
  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "Loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {data.map((items) => {
            return <Follower key={items.id} {...items} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
