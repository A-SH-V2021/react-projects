import React, { useState } from "react";
import Alert from "./components/Alert";
import List from "./components/List";
const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const submitHandle = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please input message");
    } else if (name && isEditing) {
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({show, type, msg});
  };

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandle}>
        <h3>todo list</h3>
        {alert.show && <Alert {...alert} remove={showAlert}/>}
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
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} />
          <button className="clear-btn">clear all</button>
        </div>
      )}
    </section>
  );
};

export default App;
