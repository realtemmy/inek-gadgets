import { combineReducers } from "redux";
import { categoryReducer } from "./product-reducer/product.reducer";

export const rootReducers = combineReducers({
    category: categoryReducer
})