import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Buffer } from "buffer";
import "./styles/globals.css";
import "./styles/prism.css";
import App from "./App.tsx";

// Polyfill Buffer for browser compatibility with gray-matter
window.Buffer = Buffer;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
