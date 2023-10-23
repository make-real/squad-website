import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getAnalytics } from "firebase/analytics";
import app from "./Firebase/firebase.config.js";

const analytics = getAnalytics(app);
console.log(analytics);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
