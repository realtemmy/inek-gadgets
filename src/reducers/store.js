import { createStore } from "redux";
import { rootReducers } from "./root-reducer";

export const store = createStore(rootReducers);
