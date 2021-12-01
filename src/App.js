import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";
import View from "./view";
import Add from "./Add";

function App() {
  const todos = [
    { id: 1, task: "make static data", complete: false },
    { id: 2, task: "make dynamic data", complete: false },
    { id: 3, task: "show elevation example", complete: true },
  ];

  return (
    <Container>
      <Add />
      <View activeTodoArray={todos} />
    </Container>
  );
}
export default App;
