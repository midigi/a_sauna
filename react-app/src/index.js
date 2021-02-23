import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from '../src/store/index'
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
