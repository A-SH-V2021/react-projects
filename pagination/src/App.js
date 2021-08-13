import React, { useState, useEffect } from "react";
import { useFetch } from "./component/useFetch";
import Follower from "./component/Followers";
import { ReactComponent as Myback } from "./backwards-arrows-ablue.svg";
import { ReactComponent as MyForward } from "./forward-arrows-arrow-blue.svg";

const App = () => {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page]);
 
  const pageHandle = (idx) => {
    setPage(idx);
  };
const prevHandle = () => {
 setPage((oldPage)=>{
let nextPage=oldPage-1;
if(nextPage<0){
  nextPage=data.length-1
}
return nextPage
 })
}

const nextHandle = () => {
  setPage((oldPage)=>{
 let nextPage=oldPage+1;
 if(nextPage>data.length-1){
   nextPage=0
 }
 return nextPage
  })
 }

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
            <div className="prev-btn" onClick={prevHandle}>
              <Myback />
            </div>

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
             <div className="next-btn" onClick={nextHandle}>
              <MyForward />
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
