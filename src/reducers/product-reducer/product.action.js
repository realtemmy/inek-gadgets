import { createAction } from "../reducer";
import { PRODUCTS_CONSTANTS } from "./product.constant";

export const setProducts = (products) =>
  createAction(PRODUCTS_CONSTANTS, products);

const fetchProductStart = () =>
  createAction(PRODUCTS_CONSTANTS.FETCH_PRODUCTS_START);
const fetchProductSuccess = (products) =>
  createAction(PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS, products);
const fetchProductFailed = (error) =>
  createAction(PRODUCTS_CONSTANTS.FETCH_PRODUCTS_FAILED, error);

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductStart());
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    dispatch(fetchProductSuccess(data));
  } catch (error) {
    dispatch(fetchProductFailed(error));
  }
};
