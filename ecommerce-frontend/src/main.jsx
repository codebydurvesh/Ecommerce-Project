import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

// Configure global axios base URL for production builds.
// This will use VITE_API_BASE if set in the environment, otherwise fall back
// to the backend URL used during development/proxy configuration.
import "./api/axiosConfig";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
