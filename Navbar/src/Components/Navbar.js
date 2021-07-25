import React,{useState} from "react";
import logo from "../logo.svg";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "../Data";

const Navbar = () => {

  const [value, setValue] = useState(false)
console.log(value);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={()=>setValue(!value)}>
            <FaBars />
          </button>
        </div>
        <div className={value ? "links-container show-container" : "links-container"}>
          <ul className="links">
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
