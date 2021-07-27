import React, { useState,useEffect } from "react";
import Alert from "./components/Alert";
import List from "./components/List";

const getItemsFromLocalStorage=()=>{
  const list = JSON.parse(localStorage.getItem('items'))
  if (list) {
   return list
  } else {
    return []
  }
}

const App = () => {
  const [name, setName] = useState("");
  const [list, setList] = useState(getItemsFromLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
 


  const submitHandle = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please input message");
    } else if (name && isEditing) {
      setList(list.map((item)=>{
        if (item.id===editId) {
          return {...item,title:name}
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true,'success','value change')
    } else {
      showAlert(true,'success','todo added')
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({show, type, msg});
  };

  const removeAllItems=()=>{
    setList([])
    showAlert(true,'danger','all items removed')
  }
  const removeItem=(id)=>{
    const newList = list.filter((item)=>item.id!== id)
    setList(newList)
    showAlert(true,'danger','item remove from list')
  }

  const editItemHandle=(id)=>{
    const specificItem = list.find((item)=>item.id===id)
    setEditId(specificItem.id)
    setIsEditing(true)
    setName(specificItem.title)

  }

 useEffect(() => {
   localStorage.setItem('items',JSON.stringify(list))
   
 }, [list])
  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandle}>
        {alert.show && <Alert {...alert} removeAlert={showAlert}/>}
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
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} editItemHandle={editItemHandle}/>
          <button className="clear-btn" onClick={removeAllItems}>clear all</button>
        </div>
      )}
    </section>
  );
};

export default App;
