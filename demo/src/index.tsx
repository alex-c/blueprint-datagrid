import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { FocusStyleManager } from "@blueprintjs/core";
import App from "./app";
import "./index.scss";

FocusStyleManager.onlyShowFocusOnTabs();

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
