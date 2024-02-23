import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
