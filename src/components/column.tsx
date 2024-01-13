import React from "react";

export enum ColumnType {
  TEXT = "text",
  BOOLEAN = "boolean",
  NUMBER = "number",
  DATETIME = "datetime",
}

export interface ColumnProps<T> {
  field: string;
  label: string;
  type?: ColumnType;
  sortable?: boolean;
  filterable?: boolean;
  formatter?: (value: any) => any;
  renderer?: (row: T) => JSX.Element;
}

export const Column = <T,>(_: ColumnProps<T>) => <></>;
