import React from "react";
import { Column, ColumnType, Datagrid } from "../../build";
import { useAppSelector } from "./app/hooks";
import "./app.scss";

function App() {
  const { users } = useAppSelector(state => state.users);

  return (
    <div>
      <Datagrid dataSource={users}>
        <Column field="id" label="ID" />
        <Column field="name" label="Name" sortable />
        <Column field="age" label="Age" type={ColumnType.NUMBER} sortable />
      </Datagrid>
    </div>
  );
}

export default App;
