import React from "react";
import Button from "./Button";

const category = ({ filterItems, categoris }) => {
  return (
    <div className="btn-container">
      {categoris.map((categori,index) => {
        return <Button key={index}  filterItems={filterItems} categori={categori}>{categori}</Button>;
      })}
    </div>
  );
};

export default category;
