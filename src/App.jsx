import React, { useState, useEffect } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosInput, setTodosInput] = useState("");

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("todos"));
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  // Add the Todo Item
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    saveTodosToLocalStorage(todos);
    setTodosInput("");
  };

  const addTodosWithQuantity = (todo, quantity) => {
    const num = parseInt(quantity);
    const slicedTodo = todo.slice(0, -1);
    const tasksArray = [];
    for (let i = 0; i < num; i++) {
      tasksArray.push(slicedTodo);
    }
    setTodos([...todos, ...tasksArray]);
    saveTodosToLocalStorage([...todos, ...tasksArray]);
    setTodosInput("");
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    const quantity = todosInput.trim("").split(" ").slice(-1)[0];
    if (isNaN(quantity)) {
      addTodo(todosInput);
    } else {
      addTodosWithQuantity(todosInput, quantity);
    }
  };

  // Delete the Todo Item
  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    saveTodosToLocalStorage(updatedTodos);
    setTodos(updatedTodos);
  };

  // Edit the Todo Item
  const editTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = todosInput;
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
    setTodosInput("");
  };

  //Save the Todos to Local Storage
  function saveTodosToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="h-screen bg-gray-700 flex flex-col justify-start items-center">
      <form onSubmit={handleAddTodo} className="mt-10">
        <h1 className="text-center mb-5 font-sans font-medium text-white text-[40px] lg:text-[48px]">
          Daily Goals!
        </h1>
        <input
          type="text"
          value={todosInput}
          onChange={(e) => setTodosInput(e.target.value)}
          placeholder="Add a Todo..."
          className="block w-[300px] p-2 outline-none rounded-md pl-3"
        />
        <button
          type="submit"
          className="bg-gray-500 p-3 text-white rounded-md px-5 mt-1"
        >
          Add todo
        </button>
      </form>
      <ul className="mt-4 min-w-[300px] max-w-full">
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
