import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index }) {
  return <div className="Todo">{todo.text}</div>;
}

export default function App() {
  const [todos, setTodos] = useState([
    {
      text: "Go shopping",
      isCompleted: false,
    },
    {
      text: "Exercise",
      isCompleted: false,
    },
    {
      text: "Meeting with a friend",
      isCompleted: true,
    },
  ]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="to-do-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </div>
    </div>
  );
}
