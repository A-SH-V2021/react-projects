import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items }) => {
  
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <button className="btn-container">
              <button className="edit-btn">
                <FaEdit />
              </button>
              <button className="delete-btn">
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
