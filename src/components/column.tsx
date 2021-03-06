import React from "react";

export enum ColumnType {
  TEXT = "text",
  BOOLEAN = "boolean",
  NUMBER = "number",
}

export interface ColumnProps<T> {
  field: string;
  label: string;
  type?: ColumnType;
  sortable?: boolean;
  formatter?: (value: any) => any;
  renderer?: (row: T) => JSX.Element;
  filter?: boolean;
}

export const Column = <T,>(_: ColumnProps<T>) => <></>;
