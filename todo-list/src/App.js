import React, { useState } from "react";
import Alert from "./components/Alert";
import List from "./components/List";
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert.show && <Alert />}
        <h3>todo list</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g breackfast"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button type="submit" className="submit-btn">
            {editId ? "edit" : "submit"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">clear all</button>
      </div>
    </section>
  );
};

export default App;
