import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase/firebase.config.js";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
