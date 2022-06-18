import React from "react";
import { Button, ButtonGroup, HTMLTable, Icon, NonIdealState } from "@blueprintjs/core";
import { IconNames } from "@blueprintjs/icons";
import { useDatagridSorting } from "./use-datagrid-sorting";
import { usePagination } from "./use-pagination";
import { useCellRendering } from "./use-cell-rendering";
import { Column, ColumnProps } from "./components/column";
import { Pager, PagerProps } from "./components/pager";
import { Action, ActionProps } from "./components/action";
import { useFiltering } from "./use-filtering";
import { DefaultPlaceholder, Placeholder, PlaceholderProps } from "./components/placeholder";
import "./datagrid.scss";

export type DataSourceType = {
  [key: string]: any;
};

export interface DatagridProps<T> {
  dataSource: T[];
  children: JSX.Element | JSX.Element[];
}

export interface DatagridDerivedProps<T> {
  columns: ColumnProps<T>[];
  actions: ActionProps<T>[];
  pagination?: PagerProps;
  placeholder: PlaceholderProps;
}

const parseChildren = <T,>(children: JSX.Element | JSX.Element[]): DatagridDerivedProps<T> => {
  const elements = Array.isArray(children) ? children : [children];
  const columns = elements.filter(child => child.type === Column).map(child => child.props as ColumnProps<T>);
  const actions = elements.filter(child => child.type === Action).map(child => child.props as ActionProps<T>);
  const pagination = elements
    .filter(child => child.type === Pager)
    .map(child => child.props as PagerProps)
    .at(0);

  const placeholder =
    elements
      .filter(child => child.type === Placeholder)
      .map(child => child.props as PlaceholderProps)
      .at(0) ?? DefaultPlaceholder;

  return { columns, actions, pagination, placeholder };
};

export const Datagrid = <T extends DataSourceType>(props: DatagridProps<T>) => {
  const { columns, actions, pagination, placeholder } = parseChildren<T>(props.children);

  const { paginateData, renderPaginationControls } = usePagination<T>(
    props.dataSource.length,
    pagination?.elementsPerPage,
    pagination?.directInput || false
  );
  const { sortData, renderSortingControl } = useDatagridSorting<T>(columns);
  const { filterData, renderFilterControls } = useFiltering<T>(columns);
  const { getCellClassName, renderCell } = useCellRendering<T>();

  let data = filterData(props.dataSource);
  data = sortData(data);
  data = paginateData(data);

  return (
    <div className="datagrid-wrapper">
      <HTMLTable className="datagrid" bordered condensed striped>
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.field}>
                {col.label}
                {col.sortable && <span style={{ float: "right" }}>{renderSortingControl(col)}</span>}
              </th>
            ))}
            {actions.length > 0 && <th key="datagrid-actions">Actions</th>}
          </tr>
          {columns.filter(c => c.filter).length > 0 && <tr>{columns.map(renderFilterControls)}</tr>}
        </thead>
        <tbody>
          {data.length > 0 ? (
            <>
              {data.map((row, i) => (
                <tr key={"row-" + i}>
                  {columns.map(col => (
                    <td key={col.field} className={getCellClassName(col)}>
                      {col.renderer
                        ? col.renderer(row)
                        : col.formatter
                        ? col.formatter(row[col.field])
                        : renderCell(row, col)}
                    </td>
                  ))}
                  {actions.length > 0 && (
                    <td className="datagrid-cell datagrid-cell-actions">
                      <ButtonGroup minimal fill>
                        {actions.map((action, i) => (
                          <Button
                            key={"action-" + i}
                            icon={action.icon}
                            text={action.text}
                            intent={action.intent}
                            onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
                              action.onClick ? action.onClick(event, row) : null
                            }
                          />
                        ))}
                      </ButtonGroup>
                    </td>
                  )}
                </tr>
              ))}
              {pagination &&
                [...Array(pagination.elementsPerPage - data.length)].map((_, i) => (
                  <tr key={"row-fill-" + i}>
                    {[...Array(columns.length + (actions.length > 0 ? 1 : 0))].map((_, j) => (
                      <td key={"cell-fill-" + j}>
                        <Icon icon={IconNames.Blank} />
                      </td>
                    ))}
                  </tr>
                ))}
            </>
          ) : (
            <tr>
              <td colSpan={columns.length + (actions.length > 0 ? 1 : 0)} style={{ paddingBottom: "16px" }}>
                <NonIdealState
                  icon={placeholder.icon ?? DefaultPlaceholder.icon}
                  description={placeholder.text ?? DefaultPlaceholder.text}
                />
              </td>
            </tr>
          )}
        </tbody>
      </HTMLTable>
      {pagination && <div className="datagrid-bottombar">{renderPaginationControls()}</div>}
    </div>
  );
};
