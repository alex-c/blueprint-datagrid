import React from "react";
import { Alignment } from "@blueprintjs/core";

export enum ToolbarPosition {
  TOP = "top",
  BOTTOM = "bottom",
}

export interface ToolbarItemProps {
  align: Alignment;
}

export interface ToolbarProps {
  position: ToolbarPosition;
  children: JSX.Element | JSX.Element[];
}

export const Toolbar = (_: ToolbarProps) => <></>;
