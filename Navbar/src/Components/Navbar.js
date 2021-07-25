import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { links, social } from "../Data";

const Navbar = () => {
  const [value, setValue] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHieght = linksRef.current.clientHeight;
    if (value) {
      linksContainerRef.current.style.height = `${linksHieght}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [value]);

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <SiReact />
            <h3 className='logo-title'>react</h3>
          </div>
          <button className="nav-toggle" onClick={() => setValue(!value)}>
            <FaBars />
          </button>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((social) => {
            const { id, url, icon } = social;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
