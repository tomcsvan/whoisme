import React from "react";
import ReactDOM from "react-dom/client";
// For GitHub Pages, HashRouter avoids 404s. For custom domain hosting, switch to BrowserRouter.
import { HashRouter as Router } from "react-router-dom";
import "./styles/globals.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
