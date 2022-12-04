import React from "react";
import { Alignment, Button, Icon, Navbar } from "@blueprintjs/core";
import ThemeSwitcher from "./components/theme-switcher";
import { IconNames } from "@blueprintjs/icons";
import { UnstyledLink } from "./components/unstyled-link";

export const Header = () => {
  return (
    <Navbar id="header">
      <div style={{ margin: "0 auto", width: "1200px" }}>
        <Navbar.Group align={Alignment.LEFT}>
          <Icon icon={IconNames.JoinTable} style={{ marginRight: "5px" }} />
          <Navbar.Heading>
            <UnstyledLink to="/">
              <strong>Blueprint Datagrid</strong>
            </UnstyledLink>
          </Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          <a href="https://github.com/alex-c/blueprint-datagrid" target="_blank" rel="noreferrer">
            <Button icon={IconNames.GIT_REPO} minimal>
              Github
            </Button>
          </a>
          <ThemeSwitcher />
        </Navbar.Group>
      </div>
    </Navbar>
  );
};
