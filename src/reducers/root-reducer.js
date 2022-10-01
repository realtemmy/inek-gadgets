import { combineReducers } from "redux";
import { productReducer } from "./product-reducer/product.reducer";

export const rootReducers = combineReducers({
  product: productReducer,
});