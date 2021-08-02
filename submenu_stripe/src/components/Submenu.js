import React, { useRef, useEffect } from "react";
import { useGlobalContxt } from "../context/Context";

const Submenu = () => {
  const { isSubmenu, location } = useGlobalContxt();
  const container = useRef(null);
useEffect(() => {
    const submenu=container.current
    const {center,bottom} = location
    submenu.style.left=`${center}px`
    submenu.style.top=`${bottom}px`
}, [location])
  return (
    <aside
      className={`${isSubmenu ? "submenu show" : "submenu"}`}
      ref={container}
    ></aside>
  );
};

export default Submenu;
