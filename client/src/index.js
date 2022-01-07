import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { Stateprovider } from "./util/StateProvider.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import reducer, { initialState } from "./store/initialState.jsx";
ReactDOM.render(
  <Stateprovider initialState={initialState} reducer={reducer}>
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>
  </Stateprovider>,
  document.getElementById("root")
);
