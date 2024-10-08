import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { MyProvider } from "./hooks/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <MyProvider>
      <App />
    </MyProvider>
  </Router>
);
