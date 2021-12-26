/// <reference types="react" />
import { HTMLTableProps } from "@blueprintjs/core";
export interface BlueprintDatagridColumnDefinition {
    dataField: string;
    label: string;
}
export interface BlueprintDatagridProps<T> {
    dataSource: T[];
    columnDefinitions: BlueprintDatagridColumnDefinition[];
}
declare const BlueprintDatagrid: <T extends unknown>(props: BlueprintDatagridProps<T> & import("@blueprintjs/core").IHTMLTableProps) => JSX.Element;
export default BlueprintDatagrid;
