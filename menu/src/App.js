import React, { useState } from "react";
import data from "./Data";
import Menu from "./Components/Menu";
import Category from "./Components/Categori";

const categoryList =['all',...new Set( data.map((item) => {
 return item.category;
}))]


const App = () => {
  const [itemsMenu, setItemsMenu] = useState(data);
  const [categoris] = useState(categoryList)
  
  
  const filterItems = (category) => {    
   
    if (category === "all") {
      setItemsMenu(data);
      return;
    }

    const newItems = data.filter((item) => item.category === category);
    setItemsMenu(newItems);
  };


  return (
    <main>
      <section className="menu section">
        <h1 className="title">Our menu</h1>
        <div className="underline"></div>
      </section>
      <Category categoris={categoris} filterItems={filterItems} />
      <Menu items={itemsMenu}></Menu>
    </main>
  );
};

export default App;
