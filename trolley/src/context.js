import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  cart: [],
  loading: false,
  amount: 0,
  total: 0,
};


const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    return dispatch({ type: "CLEAR_ITEMS" });
  };

  const remove = (id) => {
    return dispatch({ type: "REMOVE", id });
  };
  const increase = (id) => {
    return dispatch({ type: "INCREASE", id });
  };
  const decrease = (id) => {
    return dispatch({ type: "DECREASE", id });
  };

  const fetchData =async () => {
    dispatch({type:'LOADEING'})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({type:'DISPLAY',data:cart})   
  }
  
  
  useEffect(() => {
     dispatch({type:'GET_TOTAL'})
  }, [state.cart]);

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
