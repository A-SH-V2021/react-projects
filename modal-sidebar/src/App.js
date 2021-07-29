import React,{useContext} from "react";
import Home from "./Components/Home";
import Modal from "./Components/Modal";
import Sidebar from "./Components/Sidebar";
import {AppContext  } from './context/Context.jsx';
const App = () => {
  const data = useContext(AppContext)
  
  return (
    <>
      <Home />
      <Modal />
      <Sidebar/>
    </>
  );
};

export default App;
