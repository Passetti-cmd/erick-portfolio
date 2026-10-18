import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";
const root = document.getElementById("root")!;

const app = (
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Production pages are prerendered (scripts/prerender.mjs); dev starts empty.
if (root.hasChildNodes()) {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
