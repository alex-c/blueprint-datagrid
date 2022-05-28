import React from "react";
import { ExBasicColumns } from "./examples/ex-basic-columns";
import { Header } from "./header";
import { Classes, Menu, MenuItem } from "@blueprintjs/core";
import { ExBasicColumnsEmpty } from "./examples/ex-basic-columns-empty";
import { ExPaging } from "./examples/ex-paging";
import { ExSorting } from "./examples/ex-sorting";
import { ExActions } from "./examples/ex-actions";
import { ExCellCustomization } from "./examples/ex-custom-cells";
import { ExFiltering } from "./examples/ex-filtering";
import "./app.scss";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <nav id="menu">
          <Menu className={Classes.ELEVATION_1}>
            <MenuItem text="Basic Columns" href="#ex-basic-columns" />
            <MenuItem text="No Data" href="#ex-no-data" />
            <MenuItem text="Paging" href="#ex-paging" />
            <MenuItem text="Sorting" href="#ex-sorting" />
            <MenuItem text="Actions" href="#ex-actions" />
            <MenuItem text="Cell Customization" href="#ex-cell-customization" />
            <MenuItem text="Filtering" href="#ex-filtering" />
          </Menu>
        </nav>
        <main id="content">
          <ExBasicColumns />
          <ExBasicColumnsEmpty />
          <ExPaging />
          <ExSorting />
          <ExActions />
          <ExCellCustomization />
          <ExFiltering />
        </main>
      </div>
    </div>
  );
}

export default App;
