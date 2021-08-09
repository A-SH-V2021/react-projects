const reducer = (state, action) => {
  if (action.type === "CLEAR_ITEMS") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    return { ...state, cart: state.cart.filter((item) => item.id !== action.id) };
  }
  return state;
};
export default reducer;
