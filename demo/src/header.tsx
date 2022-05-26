import React from "react";
import { Alignment, Navbar } from "@blueprintjs/core";
import ThemeSwitcher from "./components/theme-switcher";

export const Header = () => {
  return (
    <Navbar id="header">
      <div style={{ margin: "0 auto", width: "1000px" }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>
            <strong>Blueprint Datagrid Demo</strong>
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <ThemeSwitcher />
        </Navbar.Group>
      </div>
    </Navbar>
  );
};
