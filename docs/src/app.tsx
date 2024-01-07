import React from "react";
import { Header } from "./header";
import { Classes, Menu } from "@blueprintjs/core";
import { HomePage } from "./pages/page-home";
import { EmptyTablePage } from "./pages/page-empty-table";
import { PaginationPage } from "./pages/page-pagination";
import { SortingPage } from "./pages/page-sorting";
import { ActionsPage } from "./pages/page-actions";
import { CellCustomizationPage } from "./pages/page-cell-customization";
import { FilteringPage } from "./pages/page-filtering";
import { Route, Routes } from "react-router";
import { DefiningColumnPage } from "./pages/page-defining-columns";
import { MenuLink } from "./components/menu-link";
import "./app.scss";
import { ToolbarsPage } from "./pages/page-toolbars";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <nav id="menu">
          <Menu className={Classes.ELEVATION_1}>
            <MenuLink path="/" title="Home" />
            <MenuLink path="defining-columns" title="Defining Columns" />
            <MenuLink path="toolbars" title="Toolbars" />
            <MenuLink path="empty-table" title="Empty Table" />
            <MenuLink path="pagination" title="Pagination" />
            <MenuLink path="sorting" title="Sorting" />
            <MenuLink path="filtering" title="Filtering" />
            <MenuLink path="actions" title="Actions" />
            <MenuLink path="cell-customization" title="Cell Customization" />
          </Menu>
        </nav>
        <main id="content">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="defining-columns" element={<DefiningColumnPage />} />
            <Route path="toolbars" element={<ToolbarsPage />} />
            <Route path="empty-table" element={<EmptyTablePage />} />
            <Route path="pagination" element={<PaginationPage />} />
            <Route path="sorting" element={<SortingPage />} />
            <Route path="filtering" element={<FilteringPage />} />
            <Route path="actions" element={<ActionsPage />} />
            <Route path="cell-customization" element={<CellCustomizationPage />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
