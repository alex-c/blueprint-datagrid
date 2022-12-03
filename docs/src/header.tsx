import React from "react";
import { Alignment, Icon, Navbar } from "@blueprintjs/core";
import ThemeSwitcher from "./components/theme-switcher";
import { IconNames } from "@blueprintjs/icons";

export const Header = () => {
  return (
    <Navbar id="header">
      <div style={{ margin: "0 auto", width: "1200px" }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Icon icon={IconNames.JoinTable} style={{ marginRight: "5px" }} />
          <Navbar.Heading>
            <strong>Blueprint Datagrid</strong>
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <ThemeSwitcher />
        </Navbar.Group>
      </div>
    </Navbar>
  );
};
