import React from "react";
import { ExBasicColumns } from "./examples/ex-basic-columns";
import { Header } from "./header";
import "./app.scss";
import { H1 } from "@blueprintjs/core";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <H1>Basic Functionality</H1>
        <ExBasicColumns />
      </div>
    </div>
  );
}

export default App;
