import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ButtonContextProvider from "./utils/ButtonContextProvider.jsx";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ButtonContextProvider>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </ButtonContextProvider>
);
