import React, { useRef, useEffect } from "react";
import { useGlobalContxt } from "../context/Context";

const Submenu = () => {
  const {
    isSubmenu,
    location,
    page: { page, links },
  } = useGlobalContxt();
  const container = useRef(null);

  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);

  return (
    <aside
      className={`${isSubmenu ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4 style={{textAlign:'center'}}>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((item, idx) => {
          const { url, icon, label } = item;
          return (
            <a href={url} key={idx}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
