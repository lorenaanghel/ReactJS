import React from "react";
import PersonTable from "./components/table-component.component";
import AddPerson from "./components/add-button-component.component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>~Final challenge~</h1>
      <PersonTable></PersonTable>
      <AddPerson></AddPerson>
    </div>
  );
}

export default App;
