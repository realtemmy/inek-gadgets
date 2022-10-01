import { PRODUCTS_CONSTANTS } from "./product.constant";

const initialProductState = {
  products: [],
};

export const productReducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  console.log(payload)
  switch (type) {
    case PRODUCTS_CONSTANTS.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
