import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store/rootReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./store/rootSaga";
import UserSearchPage from "./pages/UserSerachPage/UserSearchPage";
import { makeConfig } from "./utils/api.ultils";

/**
 * @todo
 * This will be used once this app can be authorized via Web application flow
 */
makeConfig();

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <UserSearchPage />
    </Provider>
  );
}

export default App;
