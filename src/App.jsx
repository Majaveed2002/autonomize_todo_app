import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todosInput, setTodosInput] = useState("");

  const handleAddTodo = () => {};

  return (
    <div className="h-screen bg-gray-700 flex justify-center">
      <div className="mt-10">
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
          onClick={handleAddTodo}
          className="bg-gray-500 p-3 text-white rounded-md px-5 mt-1"
        >
          Add todo
        </button>
      </div>
      <ul>
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default App;
