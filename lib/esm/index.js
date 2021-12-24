import React from "react";
import { HTMLTable } from "@blueprintjs/core";
var BlueprintDatagrid = function (props) {
    return (React.createElement(HTMLTable, null,
        React.createElement("thead", null,
            React.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (React.createElement("td", null, columnDefinition.label)); }))),
        React.createElement("tbody", null, props.dataSource.map(function (dataRow) { return (React.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (React.createElement("td", null, dataRow[columnDefinition.dataField])); }))); }))));
};
export default BlueprintDatagrid;
