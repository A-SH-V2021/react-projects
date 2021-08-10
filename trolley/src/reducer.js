const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.id),
    };
  }
  if (action.type === "INCREASE") {
    const newCart = state.cart.map((item) => {
      if (item.id === action.id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    return { ...state, cart: newCart };
  }

  if (action.type === "DECREASE") {
   
    const newCart = state.cart.map((item) => {
    
      if (item.id === action.id ) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    }).filter((item)=>item.amount!==0)
return {...state,cart:newCart}
  } 
  return state;
};
export default reducer;
