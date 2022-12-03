import React from "react";
import { Header } from "./header";
import { Classes, Menu } from "@blueprintjs/core";
import { HomePage } from "./pages/page-home";
import { NoDataPage } from "./pages/page-no-data";
import { PaginationPage } from "./pages/page-pagination";
import { SortingPage } from "./pages/page-sorting";
import { ActionsPage } from "./pages/page-actions";
import { CellCustomizationPage } from "./pages/page-cell-customization";
import { FilteringPage } from "./pages/page-filtering";
import { Route, Routes } from "react-router";
import { BasicsPage } from "./pages/page-basics";
import { MenuLink } from "./components/menu-link";
import "./app.scss";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="container">
        <nav id="menu">
          <Menu className={Classes.ELEVATION_1}>
            <MenuLink path="/" title="Home" />
            <MenuLink path="basics" title="Basics" />
            <MenuLink path="no-data" title="No Data" />
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
            <Route path="basics" element={<BasicsPage />} />
            <Route path="no-data" element={<NoDataPage />} />
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
