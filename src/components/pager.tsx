import React from "react";
import { ToolbarItemProps } from "./toolbar";

export interface PagerProps extends ToolbarItemProps {
  elementsPerPage: number;
  directInput?: boolean;
}

export const Pager = (_: PagerProps) => <></>;
