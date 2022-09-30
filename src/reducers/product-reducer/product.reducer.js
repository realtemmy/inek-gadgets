import { PRODUCTS_CONSTANTS } from "./product.constant";

const initialProductState = {
  products: [],
};

export const categoryReducer = (state = initialProductState, action) => {
  const { type, payload } = action;
  // action.payload = {}
  console.log(payload)
  switch (type) {
    case PRODUCTS_CONSTANTS.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
