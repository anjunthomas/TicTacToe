import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // imports React's library to talk to web browsers (REACT DOM)
import "./styles.css"; // imports component styles

import App from "./App"; // imports component created in App.js

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// This file is the bridge between the component created in App.js and the web browser