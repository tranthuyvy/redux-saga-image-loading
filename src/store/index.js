import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../saga";

const configureStore = () => {
  // create the saga middleware
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
