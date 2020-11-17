import { PRODUCT_ACTIONS } from "../actions/actions";

const initialState = {
  stock: {
    16: 10,
    24: 10,
    40: 10,
    48: 10,
    72: 10,
    96: 10,
    144: 10,
    292: 10,
    source: 1,
  },
  cart: {},
};

const productsReducer = (state = initialState, action) => {
  let newcart;
  switch (action.type) {
    case PRODUCT_ACTIONS.ADD_PRODUCT:
      newcart = state.cart[action.value.length]
        ? {
            ...state.cart,
            [action.value.length]:
              state.cart[action.value.length] + action.value.count,
          }
        : { ...state.cart, [action.value.length]: action.value.count };
      console.log(newcart);
      return {
        ...state,
        cart: newcart,
      };
    case PRODUCT_ACTIONS.SET_PRODUCT:
      newcart = {
        ...state.cart,
        [action.value.length]: action.value.count,
      };
      return {
        ...state,
        cart: newcart,
      };
    case PRODUCT_ACTIONS.DELETE_PRODUCT:
      newcart = { ...state.cart };
      delete newcart[action.value.length];
      return {
        ...state,
        cart: newcart,
      };
    case PRODUCT_ACTIONS.SET_STOCK:
      return {
        ...state,
        stock: action.value,
      };
    default:
      return state;
  }
};

export default productsReducer;
