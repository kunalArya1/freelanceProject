import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ButtonContextProvider from "./utils/ButtonContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ButtonContextProvider>
    <App />
  </ButtonContextProvider>
);
