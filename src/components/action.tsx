import React from "react";
import { Intent } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";

export interface ActionProps<T> {
  icon?: IconName;
  text?: string;
  intent?: Intent;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>, row: T) => void;
}

export const Action = <T,>(_: ActionProps<T>) => <></>;
