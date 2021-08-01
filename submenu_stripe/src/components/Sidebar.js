import React from "react";
import { useGlobalContxt } from "../context/Context";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";

const Sidemenu = () => {
  const { isSidebar, closeSidebar } = useGlobalContxt();

  

  return (
    <aside
      className={`${isSidebar ? "sidebar-wrapper show" : "sidebar-wrapper"}`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      <div className="sidebar-links">
        {sublinks.map((item, idx) => {
          const { page, links } = item;
         
          return (
            <article key={idx}>
              <h4>{page}</h4>
              <div className="sidebar-sublinks">
                {links.map((link,idx)=>{
                  const {url,icon,label} = link
                  return  <a href={url} key={idx}>
                    {icon}{label}
                    </a>

                  
                })}
              </div>
            </article>
          );
        })}
      </div>
      </div>
    </aside>
  );
};

export default Sidemenu;
