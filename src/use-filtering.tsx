import React, { useState } from "react";
import { Button, Icon, InputGroup } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ColumnProps, ColumnType } from "./components/column";
import { DataSourceType } from "./datagrid";

interface ColumnFilteringState {
  type: ColumnType;
}

enum TextColumnFilteringMode {
  CONTAINS,
  EQUALS,
}

interface TextColumnFilteringState extends ColumnFilteringState {
  value: string;
  mode: TextColumnFilteringMode;
}

interface DatagridFilteringState {
  [key: string]: TextColumnFilteringState;
}

const getInitialTextColumnFilteringState = (): TextColumnFilteringState => ({
  type: ColumnType.TEXT,
  value: "",
  mode: TextColumnFilteringMode.CONTAINS,
});

const getInitialFilteringState = (columns: ColumnProps<any>[]): DatagridFilteringState => {
  const initialState: DatagridFilteringState = {};
  for (const column of columns) {
    if (column.filter) {
      switch (column.type) {
        case ColumnType.TEXT:
          initialState[column.field] = getInitialTextColumnFilteringState();
          break;
      }
    }
  }
  return initialState;
};

export const useFiltering = <T extends DataSourceType>(columns: ColumnProps<T>[]) => {
  const [filteringState, setFilteringState] = useState<DatagridFilteringState>(getInitialFilteringState(columns));

  const renderPlaceholder = (column: ColumnProps<T>) => (
    <th key={column.field}>
      <Icon icon={IconNames.Blank} />
    </th>
  );

  const renderTextFilterControls = (column: ColumnProps<T>) => (
    <th key={column.field} className="filter-cell">
      <InputGroup
        leftElement={<Button icon={IconNames.Filter} minimal disabled />}
        value={filteringState[column.field].value}
        onChange={e =>
          setFilteringState({
            ...filteringState,
            [column.field]: {
              ...filteringState[column.field],
              value: e.target.value.toLowerCase(),
            },
          })
        }
      />
    </th>
  );

  const renderFilterControlsBasedOnType = (column: ColumnProps<T>) => {
    switch (column.type) {
      case ColumnType.TEXT:
        return renderTextFilterControls(column);
      case ColumnType.NUMBER:
      case ColumnType.BOOLEAN:
      default:
        return renderPlaceholder(column);
    }
  };

  const renderFilterControls = (column: ColumnProps<T>) => {
    return column.filter ? renderFilterControlsBasedOnType(column) : renderPlaceholder(column);
  };

  const filterData = (data: T[]) => {
    let result = [...data];
    for (const key in filteringState) {
      switch (filteringState[key].type) {
        case ColumnType.TEXT:
          if (filteringState[key].value !== "") {
            if (filteringState[key].mode === TextColumnFilteringMode.CONTAINS) {
              result = result.filter(d => d[key].toString().toLowerCase().includes(filteringState[key].value));
            } else {
              result = result.filter(d => d[key].toString().toLowerCase() === filteringState[key].value);
            }
          }
      }
    }
    return result;
  };

  return { filterData, renderFilterControls };
};
