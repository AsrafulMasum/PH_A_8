import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Router";
import { HelmetProvider } from "react-helmet-async";
import Provider from "./provider/Provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
        <RouterProvider router={Router}></RouterProvider>
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);
