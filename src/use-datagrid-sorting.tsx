import React from "react";
import { Icon, Intent } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useState } from "react";
import { ColumnProps } from "./components/column";
import { DataSourceType } from "./datagrid";

enum ColumnSortingState {
  UNSORTED,
  ASCENDING,
  DESCENDING,
}

interface DatagridSortingState {
  [key: string]: ColumnSortingState;
}

const getInitialSortingState = (columns: ColumnProps<any>[]): DatagridSortingState => {
  const initialState: DatagridSortingState = {};
  for (const column of columns) {
    initialState[column.field] = ColumnSortingState.UNSORTED;
  }
  return initialState;
};

export const useDatagridSorting = <T extends DataSourceType>(columns: ColumnProps<T>[]) => {
  const [sortingState, setSortingState] = useState<DatagridSortingState>(getInitialSortingState(columns));

  const renderSortingControl = (column: ColumnProps<T>) => {
    let iconName = IconNames.Sort;
    let intent: Intent = Intent.NONE;
    switch (sortingState[column.field]) {
      case ColumnSortingState.ASCENDING:
        iconName = IconNames.SortAsc;
        intent = Intent.PRIMARY;
        break;
      case ColumnSortingState.DESCENDING:
        iconName = IconNames.SortDesc;
        intent = Intent.PRIMARY;
        break;
    }
    return (
      <Icon icon={iconName} intent={intent} className="datagrid-control" onClick={() => setColumnSorting(column)} />
    );
  };

  const getNextColumnSortingState = (column: ColumnProps<T>) => {
    switch (sortingState[column.field]) {
      case ColumnSortingState.UNSORTED:
        return ColumnSortingState.ASCENDING;
      case ColumnSortingState.ASCENDING:
        return ColumnSortingState.DESCENDING;
      case ColumnSortingState.DESCENDING:
        return ColumnSortingState.UNSORTED;
    }
  };

  const setColumnSorting = (column: ColumnProps<T>) => {
    const nextSortingState = getNextColumnSortingState(column);
    setSortingState({
      ...getInitialSortingState(columns),
      [column.field]: nextSortingState,
    });
  };

  const defaultSortFunction = (a: any, b: any) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    }
    return 0;
  };

  const sortData = (data: T[]) => {
    for (const key in sortingState) {
      if (sortingState[key] !== ColumnSortingState.UNSORTED) {
        const sortedData = Array.from(data).sort((a: T, b: T) => {
          return defaultSortFunction(a[key], b[key]);
        });
        if (sortingState[key] === ColumnSortingState.ASCENDING) {
          return sortedData;
        } else {
          return sortedData.reverse();
        }
      }
    }
    return data;
  };

  return { sortData, renderSortingControl };
};
