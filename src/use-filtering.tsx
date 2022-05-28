import React from "react";
import { Icon } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ColumnProps } from "./components/column";
import { DataSourceType } from "./datagrid";

export const useFiltering = <T extends DataSourceType>() => {
  const renderFilterControls = (column: ColumnProps<T>) => {
    return (
      <th key={column.field}>
        <Icon icon={IconNames.Blank} />
      </th>
    );
  };

  return { renderFilterControls };
};
