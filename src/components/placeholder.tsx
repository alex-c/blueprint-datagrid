import React from "react";
import { IconName, IconNames } from "@blueprintjs/icons";

export interface PlaceholderProps {
  text?: string;
  icon?: IconName;
}

export const Placeholder = (_: PlaceholderProps) => {
  return <></>;
};

export const DefaultPlaceholder: { text: string; icon: IconName } = {
  text: "No data.",
  icon: IconNames.ZoomOut,
};
