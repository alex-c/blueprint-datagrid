import React from "react";
import { HTMLTable } from "@blueprintjs/core";

export interface BlueprintDatagridColumnDefinition {
  dataField: string;
  label: string;
}

export interface BlueprintDatagridProps<T> {
  dataSource: T[];
  columnDefinitions: BlueprintDatagridColumnDefinition[];
}

const BlueprintDatagrid = <T extends unknown>(
  props: BlueprintDatagridProps<T>
): JSX.Element => {
  return (
    <HTMLTable>
      <thead>
        <tr>
          {props.columnDefinitions.map((columnDefinition) => (
            <td>{columnDefinition.label}</td>
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
