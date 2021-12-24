import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SayHello from "../../lib/esm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello name="blueprint-datagrid" />
      </header>
    </div>
  );
}

export default App;
