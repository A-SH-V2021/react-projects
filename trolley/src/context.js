import React, { useContext, useReducer, useEffect } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  loading: false,
  amount: 0,
  total: 0,
};


const AppProvider = ({ children }) => {
  // const [cart, setCart] = useState(cartItems)
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
  
  useEffect(() => {
     dispatch({type:'GET_TOTAL'})
  }, [state.cart]);

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
