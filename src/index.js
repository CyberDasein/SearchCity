import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { rootReducer } from "./reducers/rootReducer";
import { Provider } from "react-redux";
import { saveState, loadState } from "./reducers/sessionState";

const sessionState = loadState();
const store = createStore(rootReducer, sessionState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
