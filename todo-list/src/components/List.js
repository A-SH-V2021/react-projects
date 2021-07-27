import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items ,removeItem,editItemHandle}) => {
  
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <button className="btn-container">
              <button className="edit-btn" onClick={()=>editItemHandle(id)}>
                <FaEdit />
              </button>
              <button className="delete-btn" onClick={()=>{removeItem(id)}}>
                <FaTrash />
              </button>
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default List;
