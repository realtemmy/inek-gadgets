import { createAction } from '../reducer';
import { PRODUCTS_CONSTANTS } from "./product.constant";

export const setCategories = (products) =>
  createAction(PRODUCTS_CONSTANTS, products)