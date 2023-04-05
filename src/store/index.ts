import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "@/store/rootReducer";
import { rootSaga } from "@/store/rootSaga";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
