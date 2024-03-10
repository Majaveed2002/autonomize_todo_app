import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";

function TodoItem({ item, index }) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex gap-10 w-full bg-gray-500 p-3 mb-2 rounded-sm">
      <p className="text-white font-sans text-[20px]">
        {item} <span>(updated {count} times)</span>
      </p>
      <div className="flex gap-5">
        <button>
          <GrEdit color="white" size={20} />
        </button>
        <button>
          <RiDeleteBin5Line color="red" size={20} />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
