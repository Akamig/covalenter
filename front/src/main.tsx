import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css"
    />
    <link
      href="https://pvinis.github.io/iosevka-webfont/3.4.1/iosevka.css"
      rel="stylesheet"
    />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
