import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const mount = (el) => {
  const root = createRoot(el);
  root.render(
    <BrowserRouter basename="/landing">
      <App />
    </BrowserRouter>
  );
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#landing-root");

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };