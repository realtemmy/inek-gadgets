import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducers } from "./root-reducer";

const middleWare = [logger, thunk];

const composedEnhancers = compose(applyMiddleware(...middleWare));

export const store = createStore(rootReducers, undefined, composedEnhancers )
