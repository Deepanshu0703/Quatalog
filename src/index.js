import React from "react";
import ReactDOM from "react-dom";
import './styles/index.css';
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
