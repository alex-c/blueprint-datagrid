import React from "react";
import "./app.css";
import BlueprintDatagrid, {
  BlueprintDatagridColumnDefinition,
} from "../../lib/esm";

interface RowData {
  id: number;
  name: string;
}

const dataSource: RowData[] = [
  {
    id: 1,
    name: "Alexandre",
  },
  {
    id: 2,
    name: "Natalie",
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
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BlueprintDatagrid
          dataSource={dataSource}
          columnDefinitions={columnDefinitions}
        />
      </header>
    </div>
  );
}

export default App;
