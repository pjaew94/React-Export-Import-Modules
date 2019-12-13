import React from "react";
import ReactDOM from "react-dom";
import numberSeven, { wraith, lifeline } from "./stats.js";

ReactDOM.render(
  <div>
    <li>{numberSeven}</li>
    <li>{wraith()}</li>
    <li>{lifeline()}</li>
  </div>,
  document.getElementById("root")
);
