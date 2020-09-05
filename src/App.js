import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="Todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete &#10003;</button>
        <button onClick={() => removeTodo(index)}>&times;</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={handleChange}
      />
    </form>
  );
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
      isCompleted: false,
    },
  ]);

  function addTodo(text) {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  function completeTodo(index) {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  function removeTodo(index) {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <div className="to-do-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
