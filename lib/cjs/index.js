"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@blueprintjs/core");
var BlueprintDatagrid = function (props) {
    return (react_1.default.createElement(core_1.HTMLTable, null,
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (react_1.default.createElement("td", null, columnDefinition.label)); }))),
        react_1.default.createElement("tbody", null, props.dataSource.map(function (dataRow) { return (react_1.default.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (react_1.default.createElement("td", null, dataRow[columnDefinition.dataField])); }))); }))));
};
exports.default = BlueprintDatagrid;
