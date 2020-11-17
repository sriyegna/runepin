import { PRODUCT_ACTIONS } from "./actions";

export const addProduct = (value) => {
  return {
    type: PRODUCT_ACTIONS.ADD_PRODUCT,
    value,
  };
};

export const setProduct = (value) => {
  return {
    type: PRODUCT_ACTIONS.SET_PRODUCT,
    value,
  };
};

export const deleteProduct = (value) => {
  return {
    type: PRODUCT_ACTIONS.DELETE_PRODUCT,
    value,
  };
};

export const setStock = (value) => {
  return {
    type: PRODUCT_ACTIONS.SET_STOCK,
    value,
  };
};
