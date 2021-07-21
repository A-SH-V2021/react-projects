import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from 'react-icons/fa'
import Loading from "./Loading";


const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(0);

  const fetchInfo = async () => {
    const respons = await fetch(url);
    const result = await respons.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) {
    return <Loading />;
  }

  const { title, company, dates, duties } = data[value];

  return (
    <section className="section">
      <div className="title">
        <h2>expirence</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
         {data.map((item,idx)=>{
           return <button key={item.id} onClick={()=>setValue(idx)} className={`job-btn ${idx===value && 'active-btn'}`} >
             {item.company}
           </button>
         })}
        </div>
        {/* job information */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
         {duties.map((duty,idx)=>{
           return(
             <div key={idx} className='job-desc'>
               <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
               {duty}
             </div>
           )
         })}
        </article>
      </div>
    </section>
  );
};

export default App;
