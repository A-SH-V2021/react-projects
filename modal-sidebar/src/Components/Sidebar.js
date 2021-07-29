import React, { useState } from "react";
import { links, social } from "../Data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../context/Context";

const Sidebar = () => {
  const [information, setInformation] = useState(links);
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={`${isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}`}>
      <div className="sidebar-header">
        <h2 className="logo">react</h2>
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {information.map((item) => {
          const { id, url, text, icon } = item;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((item) => {
          const { id, url, icon } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
