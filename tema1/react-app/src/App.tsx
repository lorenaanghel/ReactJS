import React from "react";
import "./App.css";
import Header from "./components/header-component/header-component.component";
import Body from "./components/body-component/body-component.component";

function App() {
  let myData: string = "Hello world!";
  let myName: string = "Lorena";

  return (
    <div className="App">
      <Header data={myData} name={myName}></Header>
      <h1>Hello react app</h1>
      <Body data={myData}></Body>
    </div>
  );
}

export default App;
