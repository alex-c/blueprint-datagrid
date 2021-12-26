import React from "react";
import { HTMLTable, HTMLTableProps } from "@blueprintjs/core";

export interface BlueprintDatagridColumnDefinition {
  dataField: string;
  label: string;
}

export interface BlueprintDatagridProps<T> {
  dataSource: T[];
  columnDefinitions: BlueprintDatagridColumnDefinition[];
}

const BlueprintDatagrid = <T extends unknown>(
  props: BlueprintDatagridProps<T> & HTMLTableProps
): JSX.Element => {
  return (
    <HTMLTable
      {...props}
      style={
        props.bordered
          ? {
              boxShadow:
                "rgba(17, 20, 24, 0.15) 0px 0px 0px 1px, rgba(17, 20, 24, 0) 0px 0px 0px, rgba(17, 20, 24, 0) 0px 0px 0px",
            }
          : {}
      }
    >
      <thead>
        <tr>
          {props.columnDefinitions.map((columnDefinition) => (
            <th>{columnDefinition.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.dataSource.map((dataRow) => (
          <tr>
            {props.columnDefinitions.map((columnDefinition) => (
              <td>{dataRow[columnDefinition.dataField]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </HTMLTable>
  );
};

export default BlueprintDatagrid;
