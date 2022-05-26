import React from "react";
import { ExBasicColumns } from "./examples/ex-basic-columns";
import { Header } from "./header";
import { Classes, H1, Menu, MenuItem } from "@blueprintjs/core";
import { ExBasicColumnsEmpty } from "./examples/ex-basic-columns-empty";
import "./app.scss";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <nav id="menu">
          <Menu className={Classes.ELEVATION_1}>
            <MenuItem text="Basic Columns" />
            <MenuItem text="No Data" />
            <MenuItem text="Paging" />
          </Menu>
        </nav>
        <main id="content">
          <H1>Basic Functionality</H1>
          <ExBasicColumns />
          <ExBasicColumnsEmpty />
        </main>
      </div>
    </div>
  );
}

export default App;
