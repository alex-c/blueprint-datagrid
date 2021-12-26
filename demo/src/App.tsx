import React from "react";
import "./app.css";
import BlueprintDatagrid, {
  BlueprintDatagridColumnDefinition,
} from "../../lib/esm";

interface RowData {
  id: number;
  name: string;
  age: number;
  gender: string;
}

const dataSource: RowData[] = [
  {
    id: 1,
    name: "Alexandre Charoy",
    age: 31,
    gender: "male",
  },
  {
    id: 2,
    name: "Natalie Neuber",
    age: 31,
    gender: "female",
  },
  {
    id: 3,
    name: "Gandalf the Gray",
    age: 567,
    gender: "male",
  },
];

const columnDefinitions: BlueprintDatagridColumnDefinition[] = [
  {
    dataField: "id",
    label: "ID",
  },
  {
    dataField: "name",
    label: "Name",
  },
  {
    dataField: "age",
    label: "Age",
  },
  {
    dataField: "gender",
    label: "Gender",
  },
];

function App() {
  return (
    <div id="app">
      <div id="container">
        <BlueprintDatagrid
          dataSource={dataSource}
          columnDefinitions={columnDefinitions}
          striped
          bordered
          interactive
        />
      </div>
    </div>
  );
}

export default App;
