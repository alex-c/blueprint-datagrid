import React, { useState } from "react";
import { Button, Icon, InputGroup, Intent, Menu, MenuItem } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { ColumnProps, ColumnType } from "./components/column";
import { DataSourceType } from "./datagrid";
import { Popover2 } from "@blueprintjs/popover2";

interface ColumnFilteringState {
  type: ColumnType;
}

enum TextColumnFilteringMode {
  CONTAINS,
  CONTAINS_NOT,
  EQUALS,
  EQUALS_NOT,
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
        leftElement={
          <Popover2
            content={
              <Menu>
                <MenuItem
                  text="contains"
                  icon={IconNames.Selection}
                  intent={
                    filteringState[column.field].mode === TextColumnFilteringMode.CONTAINS
                      ? Intent.PRIMARY
                      : Intent.NONE
                  }
                  onClick={() =>
                    setFilteringState({
                      ...filteringState,
                      [column.field]: {
                        ...filteringState[column.field],
                        mode: TextColumnFilteringMode.CONTAINS,
                      },
                    })
                  }
                />
                <MenuItem
                  text="doesn't contain"
                  icon={IconNames.Disable}
                  intent={
                    filteringState[column.field].mode === TextColumnFilteringMode.CONTAINS_NOT
                      ? Intent.PRIMARY
                      : Intent.NONE
                  }
                  onClick={() =>
                    setFilteringState({
                      ...filteringState,
                      [column.field]: {
                        ...filteringState[column.field],
                        mode: TextColumnFilteringMode.CONTAINS_NOT,
                      },
                    })
                  }
                />
                <MenuItem
                  text="equals"
                  icon={IconNames.Equals}
                  intent={
                    filteringState[column.field].mode === TextColumnFilteringMode.EQUALS ? Intent.PRIMARY : Intent.NONE
                  }
                  onClick={() =>
                    setFilteringState({
                      ...filteringState,
                      [column.field]: {
                        ...filteringState[column.field],
                        mode: TextColumnFilteringMode.EQUALS,
                      },
                    })
                  }
                />
                <MenuItem
                  text="not equal to"
                  icon={IconNames.NotEqualTo}
                  intent={
                    filteringState[column.field].mode === TextColumnFilteringMode.EQUALS_NOT
                      ? Intent.PRIMARY
                      : Intent.NONE
                  }
                  onClick={() =>
                    setFilteringState({
                      ...filteringState,
                      [column.field]: {
                        ...filteringState[column.field],
                        mode: TextColumnFilteringMode.EQUALS_NOT,
                      },
                    })
                  }
                />
              </Menu>
            }
            placement="bottom"
          >
            <Button icon={IconNames.Filter} minimal />
          </Popover2>
        }
        rightElement={
          <Button
            icon={IconNames.Cross}
            minimal
            onClick={() =>
              setFilteringState({
                ...filteringState,
                [column.field]: {
                  ...filteringState[column.field],
                  value: "",
                },
              })
            }
            disabled={filteringState[column.field].value === ""}
          />
        }
        value={filteringState[column.field].value}
        onChange={e =>
          setFilteringState({
            ...filteringState,
            [column.field]: {
              ...filteringState[column.field],
              value: e.target.value,
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
            const filterValue = filteringState[key].value.toLocaleLowerCase();
            switch (filteringState[key].mode) {
              case TextColumnFilteringMode.CONTAINS:
                result = result.filter(d => d[key].toString().toLowerCase().includes(filterValue));
                break;
              case TextColumnFilteringMode.CONTAINS_NOT:
                result = result.filter(d => !d[key].toString().toLowerCase().includes(filterValue));
                break;
              case TextColumnFilteringMode.EQUALS:
                result = result.filter(d => d[key].toString().toLowerCase() === filterValue);
                break;
              case TextColumnFilteringMode.EQUALS_NOT:
                result = result.filter(d => d[key].toString().toLowerCase() !== filterValue);
                break;
            }
          }
      }
    }
    return result;
  };

  return { filterData, renderFilterControls };
};
