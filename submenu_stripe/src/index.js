import React from "react";
import {render} from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/Context";

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById("root")
);
