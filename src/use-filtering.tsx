import React, { useState } from "react";
import { Button, Icon, InputGroup, Intent, Menu, MenuItem, NumericInput } from "@blueprintjs/core";
import { IconName, IconNames } from "@blueprintjs/icons";
import { ColumnProps, ColumnType } from "./components/column";
import { DataSourceType } from "./datagrid";
import { Popover2 } from "@blueprintjs/popover2";
import { Select2 } from "@blueprintjs/select";

interface ColumnFilteringState {
  type: ColumnType;
}

enum TextColumnFilteringMode {
  CONTAINS,
  CONTAINS_NOT,
  EQUALS,
  EQUALS_NOT,
}

enum NumberColumnFilteringMode {
  EQUALS,
  EQUALS_NOT,
  GREATER,
  GREATER_EQUALS,
  LESS,
  LESS_EQUALS,
}

enum OptionalBoolean {
  FALSE,
  TRUE,
  NONE,
}

const getValueBasedOnOptionalBoolean = <V,>(bool: OptionalBoolean, defaultValue: V, trueValue: V, falseValue: V): V => {
  switch (bool) {
    case OptionalBoolean.NONE:
      return defaultValue;
    case OptionalBoolean.TRUE:
      return trueValue;
    case OptionalBoolean.FALSE:
      return falseValue;
  }
};

interface TextColumnFilteringState extends ColumnFilteringState {
  value: string;
  mode: TextColumnFilteringMode;
}

interface NumberColumnFilteringState extends ColumnFilteringState {
  value: string;
  mode: NumberColumnFilteringMode;
}

interface BooleanColumnFilteringState extends ColumnFilteringState {
  value: OptionalBoolean;
}

interface DatagridFilteringState {
  [key: string]: TextColumnFilteringState | NumberColumnFilteringState | BooleanColumnFilteringState;
}

const getInitialTextColumnFilteringState = (): TextColumnFilteringState => ({
  type: ColumnType.TEXT,
  value: "",
  mode: TextColumnFilteringMode.CONTAINS,
});

const getInitialNumberColumnFilteringState = (): NumberColumnFilteringState => ({
  type: ColumnType.NUMBER,
  value: NumericInput.VALUE_EMPTY,
  mode: NumberColumnFilteringMode.EQUALS,
});

const getInitialBooleanColumnFilteringState = (): BooleanColumnFilteringState => ({
  type: ColumnType.BOOLEAN,
  value: OptionalBoolean.NONE,
});

const getInitialFilteringState = (columns: ColumnProps<any>[]): DatagridFilteringState => {
  const initialState: DatagridFilteringState = {};
  for (const column of columns) {
    if (column.filter) {
      switch (column.type) {
        case ColumnType.TEXT:
          initialState[column.field] = getInitialTextColumnFilteringState();
          break;
        case ColumnType.NUMBER:
          initialState[column.field] = getInitialNumberColumnFilteringState();
          break;
        case ColumnType.BOOLEAN:
          initialState[column.field] = getInitialBooleanColumnFilteringState();
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

  const renderTextFilterModeControl = (
    column: ColumnProps<T>,
    text: string,
    icon: IconName,
    mode: TextColumnFilteringMode
  ) => {
    const currentState = filteringState[column.field] as TextColumnFilteringState;
    return (
      <MenuItem
        text={text}
        icon={icon}
        intent={currentState.mode === mode ? Intent.PRIMARY : Intent.NONE}
        onClick={() =>
          setFilteringState({
            ...filteringState,
            [column.field]: {
              ...currentState,
              mode: mode,
            } as TextColumnFilteringState,
          })
        }
      />
    );
  };

  const renderTextFilterControls = (column: ColumnProps<T>) => (
    <th key={column.field} className="filter-cell">
      <InputGroup
        leftElement={
          <Popover2
            content={
              <Menu>
                {renderTextFilterModeControl(column, "contains", IconNames.Selection, TextColumnFilteringMode.CONTAINS)}
                {renderTextFilterModeControl(
                  column,
                  "doesn't contain",
                  IconNames.Disable,
                  TextColumnFilteringMode.CONTAINS_NOT
                )}
                {renderTextFilterModeControl(column, "equals", IconNames.Equals, TextColumnFilteringMode.EQUALS)}
                {renderTextFilterModeControl(
                  column,
                  "not equal to",
                  IconNames.NotEqualTo,
                  TextColumnFilteringMode.EQUALS_NOT
                )}
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
                } as TextColumnFilteringState,
              })
            }
            disabled={filteringState[column.field].value === ""}
          />
        }
        value={filteringState[column.field].value as string}
        onChange={e =>
          setFilteringState({
            ...filteringState,
            [column.field]: {
              ...filteringState[column.field],
              value: e.target.value,
            } as TextColumnFilteringState,
          })
        }
        fill
      />
    </th>
  );

  const renderNumberFilterModeControl = (
    column: ColumnProps<T>,
    text: string,
    icon: IconName,
    mode: NumberColumnFilteringMode
  ) => {
    const currentState = filteringState[column.field] as NumberColumnFilteringState;
    return (
      <MenuItem
        text={text}
        icon={icon}
        intent={currentState.mode === mode ? Intent.PRIMARY : Intent.NONE}
        onClick={() =>
          setFilteringState({
            ...filteringState,
            [column.field]: {
              ...currentState,
              mode: mode,
            } as NumberColumnFilteringState,
          })
        }
      />
    );
  };

  const renderNumberFilterControls = (column: ColumnProps<T>) => {
    const currentState = filteringState[column.field] as NumberColumnFilteringState;
    return (
      <th key={column.field} className="filter-cell">
        <NumericInput
          buttonPosition={"none"}
          leftElement={
            <Popover2
              content={
                <Menu>
                  {renderNumberFilterModeControl(column, "equals", IconNames.Equals, NumberColumnFilteringMode.EQUALS)}
                  {renderNumberFilterModeControl(
                    column,
                    "not equal to",
                    IconNames.NotEqualTo,
                    NumberColumnFilteringMode.EQUALS_NOT
                  )}
                  {renderNumberFilterModeControl(
                    column,
                    "greater than",
                    IconNames.GreaterThan,
                    NumberColumnFilteringMode.GREATER
                  )}
                  {renderNumberFilterModeControl(
                    column,
                    "greater than or equal to",
                    IconNames.GreaterThanOrEqualTo,
                    NumberColumnFilteringMode.GREATER_EQUALS
                  )}
                  {renderNumberFilterModeControl(
                    column,
                    "less than",
                    IconNames.LessThan,
                    NumberColumnFilteringMode.LESS
                  )}
                  {renderNumberFilterModeControl(
                    column,
                    "less than or equal to",
                    IconNames.LessThanOrEqualTo,
                    NumberColumnFilteringMode.LESS_EQUALS
                  )}
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
              onClick={() =>
                setFilteringState({
                  ...filteringState,
                  [column.field]: {
                    ...currentState,
                    value: NumericInput.VALUE_EMPTY,
                  } as NumberColumnFilteringState,
                })
              }
              disabled={currentState.value === NumericInput.VALUE_EMPTY}
              minimal
            />
          }
          value={currentState.value}
          onValueChange={(_, value) =>
            setFilteringState({
              ...filteringState,
              [column.field]: {
                ...currentState,
                value: value,
              } as NumberColumnFilteringState,
            })
          }
          fill
        />
      </th>
    );
  };

  const renderBooleanFilterControls = (column: ColumnProps<T>) => {
    const currentState = filteringState[column.field] as BooleanColumnFilteringState;
    return (
      <th key={column.field} className="filter-cell">
        <Select2<OptionalBoolean>
          items={[OptionalBoolean.NONE, OptionalBoolean.TRUE, OptionalBoolean.FALSE]}
          itemRenderer={(item: OptionalBoolean, { handleClick }) => (
            <MenuItem text={getValueBasedOnOptionalBoolean(item, "None", "True", "False")} onClick={handleClick} />
          )}
          onItemSelect={(value: OptionalBoolean) => {
            setFilteringState({
              ...filteringState,
              [column.field]: {
                ...currentState,
                value: value,
              } as BooleanColumnFilteringState,
            });
          }}
          filterable={false}
        >
          <Button
            text={getValueBasedOnOptionalBoolean(currentState.value, "Select...", "True", "False")}
            rightIcon={IconNames.DoubleCaretVertical}
          />
        </Select2>
      </th>
    );
  };

  const renderFilterControlsBasedOnType = (column: ColumnProps<T>) => {
    switch (column.type) {
      case ColumnType.TEXT:
        return renderTextFilterControls(column);
      case ColumnType.NUMBER:
        return renderNumberFilterControls(column);
      case ColumnType.BOOLEAN:
        return renderBooleanFilterControls(column);
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
          const textFilteringState = filteringState[key] as TextColumnFilteringState;
          if (textFilteringState.value !== "") {
            const filterValue = textFilteringState.value.toLocaleLowerCase();
            switch (textFilteringState.mode) {
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
          break;
        case ColumnType.NUMBER:
          const numberFilteringState = filteringState[key] as NumberColumnFilteringState;
          if (numberFilteringState.value != NumericInput.VALUE_EMPTY) {
            const filterValue = Number(numberFilteringState.value);
            switch (numberFilteringState.mode) {
              case NumberColumnFilteringMode.EQUALS:
                result = result.filter(d => d[key] === filterValue);
                break;
              case NumberColumnFilteringMode.EQUALS_NOT:
                result = result.filter(d => d[key] !== filterValue);
                break;
              case NumberColumnFilteringMode.GREATER:
                result = result.filter(d => d[key] > filterValue);
                break;
              case NumberColumnFilteringMode.GREATER_EQUALS:
                result = result.filter(d => d[key] >= filterValue);
                break;
              case NumberColumnFilteringMode.LESS:
                result = result.filter(d => d[key] < filterValue);
                break;
              case NumberColumnFilteringMode.LESS_EQUALS:
                result = result.filter(d => d[key] <= filterValue);
                break;
            }
          }
          break;
        case ColumnType.BOOLEAN:
          const booleanFilteringState = filteringState[key] as BooleanColumnFilteringState;
          if (booleanFilteringState.value != OptionalBoolean.NONE) {
            result = result.filter(d => d[key] == booleanFilteringState.value);
            break;
          }
          break;
      }
    }
    return result;
  };

  return { filterData, renderFilterControls };
};
