import React, { ReactNode } from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ColumnProps, ColumnType } from "./components/column";
import { DataSourceType } from "./datagrid";

type CellRenderFunction = <T extends DataSourceType>(row: T, col: ColumnProps<T>) => ReactNode;

export const useRendering = <T extends DataSourceType>() => {
  const getCellClassName = (col: ColumnProps<T>) => {
    const baseClassName = "datagrid-cell";
    if (col.type) {
      return `${baseClassName} ${baseClassName}-${col.type}`;
    }
    return baseClassName;
  };

  const renderBooleanCell: CellRenderFunction = (row, col) => {
    return row[col.field] ? <Icon icon={IconNames.Tick} /> : <Icon icon={IconNames.Cross} />;
  };

  const renderDatetimeCell: CellRenderFunction = (row, col) => {
    if (row[col.field] instanceof Date && !isNaN(row[col.field])) {
      return row[col.field].toString();
    } else if (row[col.field] instanceof String) {
      return new Date(row[col.field]).toString();
    } else {
      return "";
    }
  };

  const renderDefaultCell: CellRenderFunction = (row, col) => {
    return typeof row[col.field] === "object" ? row[col.field].toString() : row[col.field];
  };

  const renderCell: CellRenderFunction = (row, col) => {
    switch (col.type) {
      case ColumnType.BOOLEAN:
        return renderBooleanCell(row, col);
      case ColumnType.DATETIME:
        return renderDatetimeCell(row, col);
      default:
        return renderDefaultCell(row, col);
    }
  };

  return { getCellClassName, renderCell };
};
