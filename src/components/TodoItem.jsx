import React from "react";

function TodoItem({ item, index }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>
        {item} <span>(updated {count} times)</span>{" "}
      </p>
      <button>edit</button>
      <button>Delete</button>
    </div>
  );
}

export default TodoItem;
