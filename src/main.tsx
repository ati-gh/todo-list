import ReactDOM from "react-dom/client";
import RouterProvider from "./providers/RouterProvider/RouterProvider";
import React from "react";
import "./main.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
