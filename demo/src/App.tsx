import React from "react";
import { Column, ColumnType, Datagrid } from "../../build";
import "./app.css";

interface RowData {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const dataSource: RowData[] = [
  {
    id: 1,
    name: "Alexandre",
    age: 31,
    gender: "male",
  },
  {
    id: 2,
    name: "Natalie",
    age: 31,
    gender: "female",
  },
  {
    id: 3,
    name: "Gandalf",
    age: 567,
    gender: "male",
  },
];

function App() {
  return (
    <div id="app">
      <div id="container">
        <Datagrid dataSource={dataSource}>
          <Column field="id" label="ID" />
          <Column field="name" label="Name" sortable />
          <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
          <Column field="gender" label="Gender" />
        </Datagrid>
      </div>
    </div>
  );
}

export default App;
