import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "../src/store/index";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <script
        src="https://kit.fontawesome.com/f028fd72a9.js"
        crossorigin="anonymous"
      ></script>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
