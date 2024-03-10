import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItem({ item, index, removeTodo, editTodo }) {
  const [count, setCount] = useState(0);

  const handleRemove = () => {
    removeTodo(index);
  };

  const handleEdit = () => {
    editTodo(index);
    setCount((count) => count + 1);
  };

  return (
    <div className="flex gap-10 w-full bg-gray-500 p-3 mb-2 rounded-sm">
      <p className="text-white font-sans text-[20px]">
        {item} (updated {count} <span>{count === 1 ? "time" : "times"}</span> )
      </p>
      <div className="flex gap-5">
        <button onClick={handleEdit}>
          <GrEdit color="white" size={20} />
        </button>
        <button onClick={handleRemove}>
          <RiDeleteBin5Line color="red" size={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
