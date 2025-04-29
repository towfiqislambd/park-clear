import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AosProvider from "./providers/AOS/AosProvider";
import router from "./router/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AosProvider>
      <RouterProvider router={router} />
    </AosProvider>
  </StrictMode>
);
