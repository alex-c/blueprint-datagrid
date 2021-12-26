"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var core_1 = require("@blueprintjs/core");
var BlueprintDatagrid = function (props) {
    return (react_1.default.createElement(core_1.HTMLTable, __assign({}, props, { style: props.bordered
            ? {
                boxShadow: "rgba(17, 20, 24, 0.15) 0px 0px 0px 1px, rgba(17, 20, 24, 0) 0px 0px 0px, rgba(17, 20, 24, 0) 0px 0px 0px",
            }
            : {} }),
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (react_1.default.createElement("th", null, columnDefinition.label)); }))),
        react_1.default.createElement("tbody", null, props.dataSource.map(function (dataRow) { return (react_1.default.createElement("tr", null, props.columnDefinitions.map(function (columnDefinition) { return (react_1.default.createElement("td", null, dataRow[columnDefinition.dataField])); }))); }))));
};
exports.default = BlueprintDatagrid;
