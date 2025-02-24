import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./components/styles.css"; // Importul pentru CSS-ul global

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
