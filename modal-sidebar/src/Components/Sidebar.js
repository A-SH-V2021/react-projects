import React, { useState } from "react";
import { links,social } from "../Data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [information, setInformation] = useState(links);

  return (
    <aside className={`sidebar`}>
      <div className="sidebar-header">
        <h2 className="logo">react</h2>
        <button className="close-btn">
          <FaTimes />
        </button>
      </div>
      <ul className="links">
          {information.map((item)=>{
              const {id,url,text,icon}=item
              return <li key={id}>
                  <a href={url}>{icon}{text}</a>
              </li>
          })}
      </ul>
      <ul className="social-icons">
          {social.map((item)=>{
              const {id,url,icon}=item
              return <li  key={id}>
                  <a href={url}>{icon}</a>
              </li>
          })}
      </ul>
    </aside>
  );
};

export default Sidebar;
