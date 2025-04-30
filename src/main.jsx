import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AosProvider from "./providers/AOS/AosProvider";
import router from "./router/router";
import { ThemeProvider } from './components/ThemeProvider/ThemeProvider';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AosProvider>
        <RouterProvider router={router} />
      </AosProvider>
    </ThemeProvider>
  </StrictMode>
);