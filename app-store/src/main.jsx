import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./Routes/Routes";
import Loader from "./components/Loader.jsx";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} fallbackElement={<Loader />} />
  </StrictMode>
);
