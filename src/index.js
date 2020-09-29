import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./../node_modules/jquery/dist/jquery.min";
import "./../node_modules/popper.js/dist/umd/popper.min";
import "./../node_modules/bootstrap/dist/js/bootstrap.min";

import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./component/App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
