import React from "react";
import { Button } from "@blueprintjs/core";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { appSlice } from "../app-slice";

const ThemeSwitcher = () => {
  const { isDarkModeActive } = useAppSelector(store => store.app);
  const dispatch = useAppDispatch();

  const switchTheme = () => {
    dispatch(appSlice.actions.setDarkModeActive(!isDarkModeActive));
  };

  return (
    <Button
      minimal
      icon={isDarkModeActive ? "flash" : "moon"}
      text={isDarkModeActive ? "Light Theme" : "Dark Theme"}
      onClick={switchTheme}
    />
  );
};

export default ThemeSwitcher;
