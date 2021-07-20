import React from "react";

const Button = ({ filterItems, categori, children }) => {
  return (
    <button className="filter-btn" onClick={() => filterItems(categori)}>
      {children}
    </button>
  );
};

export default Button;
