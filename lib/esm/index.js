var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { HTMLTable } from "@blueprintjs/core";
var BlueprintDatagrid = function (props) {
    return (React.createElement(HTMLTable, __assign({}, props, { style: props.bordered
            ? {
                boxShadow: "rgba(17, 20, 24, 0.15) 0px 0px 0px 1px, rgba(17, 20, 24, 0) 0px 0px 0px, rgba(17, 20, 24, 0) 0px 0px 0px",
            }
            : {} }),
        React.createElement("thead", null,
            React.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (React.createElement("th", null, columnDefinition.label)); }))),
        React.createElement("tbody", null, props.dataSource.map(function (dataRow) { return (React.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (React.createElement("td", null, dataRow[columnDefinition.dataField])); }))); }))));
};
export default BlueprintDatagrid;
