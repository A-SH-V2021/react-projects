import React, {  useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  loading: false,
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
