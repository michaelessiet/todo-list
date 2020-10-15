import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run on start useEffect
  useEffect(() => {
    getLocalTodos();
  } ,[])

  //useEffect
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions and events
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos =JSON.parse(localStorage.getItem('todos'));
      setTodos(localTodos)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        setStatus={setStatus}
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setFilteredTodos={setFilteredTodos}
        status={status}
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
