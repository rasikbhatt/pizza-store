const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, basket: [] };
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.payload] };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log("Cant remove product");
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
