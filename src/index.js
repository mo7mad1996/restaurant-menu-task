// react
import React from "react";
import ReactDOM from "react-dom/client";

// fontawesome
import "./utils/fontawesome.js";

// css
import "./assets/css/main.css";

// components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
