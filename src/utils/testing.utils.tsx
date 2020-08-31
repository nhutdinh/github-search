import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../store/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../store/rootSaga";

export const renderWithRedux = (
  component: React.ReactElement,
  initState = {}
) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);

  return { ...render(<Provider store={store}>{component}</Provider>) };
};
