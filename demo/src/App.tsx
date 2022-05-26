import React from "react";
import { ExBasicColumns } from "./examples/ex-basic-columns";
import { Header } from "./header";
import { Classes, H1, Menu, MenuItem } from "@blueprintjs/core";
import { ExBasicColumnsEmpty } from "./examples/ex-basic-columns-empty";
import "./app.scss";
import { ExPaging } from "./examples/ex-paging";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <nav id="menu">
          <Menu className={Classes.ELEVATION_1}>
            <MenuItem text="Basic Columns" href="#basic-columns" />
            <MenuItem text="No Data" href="#no-data" />
            <MenuItem text="Paging" href="#paging" />
          </Menu>
        </nav>
        <main id="content">
          <ExBasicColumns />
          <ExBasicColumnsEmpty />
          <ExPaging />
        </main>
      </div>
    </div>
  );
}

export default App;
