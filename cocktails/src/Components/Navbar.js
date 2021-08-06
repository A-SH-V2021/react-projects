import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h1 className='react'>React</h1>
        </Link>
        <ul className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">about</Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
