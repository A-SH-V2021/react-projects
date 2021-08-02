import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContxt } from "../context/Context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContxt();

  const openSubmenuHandle = (e) => {
    const page=e.target.textContent
    const tempBtn=e.target.getBoundingClientRect()
    const center = (tempBtn.left+tempBtn.right)/2
    const bottom=tempBtn.bottom-3
    openSubmenu(page,{center,bottom});
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h1>react</h1>
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={(e) => openSubmenuHandle(e)}>
              products
            </button>
          </li>
          <li>
            <button className="link-btn"  onMouseOver={(e) => openSubmenuHandle(e)}>developers</button>
          </li>
          <li>
            <button className="link-btn"  onMouseOver={(e) => openSubmenuHandle(e)}>company</button>
          </li>
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
