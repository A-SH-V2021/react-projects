import React, { useState, useEffect, useContext } from "react";
export const AppContext = React.createContext();

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("b");
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchItem}`);
      const data = await response.json();
      const { drinks } = data;
     
      if (drinks) {
        const newItem =   drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;
         return {
            id: idDrink,
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newItem)
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCocktail();
  }, [searchItem]);

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
