import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import firebaseConfig from "./Firebase/firebase.config.js";
import "./index.css";

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
