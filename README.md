# Blueprint Datagrid

Blueprint Datagrid is an enhanced table component for [Blueprint 5](https://blueprintjs.com/). It adds features like paging, sorting and filtering to basic Blueprint tables. Blueprint Datagrid is built with Blueprint components and styling and stays faithful to the look-and-feel of the library in both dark and light mode. It supports and is written in Typescript.

Documentation and examples can be found on the project's [Github Page](https://alex-c.github.io/blueprint-datagrid/)!

### Status

Blueprint Datagrid is currently in active development. Progress is being tracked in [this project](https://github.com/users/alex-c/projects/1). You can find the current version on [NPM](https://www.npmjs.com/package/@alex-c/blueprint-datagrid).

## Why

Blueprint has two table components, the basic [HTMLTable](https://blueprintjs.com/docs/#core/components/html-table), that provides Blueprint styling to native HTML tables, and the [Table](https://blueprintjs.com/docs/#table) component, which allows to build highly interactive spreadsheet-like apps. Blueprint Datagrid aims to hit the middle ground, wrapping the `HTMLTable` and adding common functionality like paging, sorting and filtering.

## Features

Currently, Blueprint Datagrid supports the following features:

- Paging
- Sorting for text, number and boolean columns
- Filtering for text, number and boolean columns
- Row-level actions
- Custom formatting/rendering of cells

More details and examples can be found in the [documentation](https://alex-c.github.io/blueprint-datagrid/)!

## Getting Started

Blueprint Datagrid can be installed using `npm` (or the package manager of your choice):

```
npm install @alex-c/blueprint-datagrid
```

In your `react` project, import and use the `Datagrid` component as well as other needed components:

```js
import { Column, ColumnType, Datagrid, Pager } from "@alex-c/blueprint-datagrid";

//...

<Datagrid dataSource={varieties}>
  <Column field="name" label="Name" filter />
  <Column field="shuUpperBound" label="Heat (SHU)" type={ColumnType.NUMBER} sortable />
  <Column field="rare" label="Rare" type={ColumnType.BOOLEAN} />
  <Pager elementsPerPage={5} />
</Datagrid>;
```

You can find more information on how to use Blueprint Datagrid in the [documentation](https://alex-c.github.io/blueprint-datagrid/).
