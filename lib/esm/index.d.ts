/// <reference types="react" />
export interface BlueprintDatagridColumnDefinition {
    dataField: string;
    label: string;
}
export interface BlueprintDatagridProps<T> {
    dataSource: T[];
    columnDefinitions: BlueprintDatagridColumnDefinition[];
}
declare const BlueprintDatagrid: <T extends unknown>(props: BlueprintDatagridProps<T>) => JSX.Element;
export default BlueprintDatagrid;
