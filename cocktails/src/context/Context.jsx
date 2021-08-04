import React, { useState, useContext } from "react";
export const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchItem, setSearchItem] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  return (
    <AppContext.Provider
      value={{ loading, searchItem, cocktails, setSearchItem }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => {
  return useContext(AppContext);
};
