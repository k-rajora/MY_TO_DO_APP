import React, { useState, useEffect } from "react";
import { getTodos, addTodo, deleteTodo, toggleTodo } from "../api/todoAPI";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const loadTodos = async () => {
    const res = await getTodos();
    setTodos(res.data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async () => {
    if (!text.trim()) return;
    await addTodo(text);
    setText("");
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  const handleToggle = async (id) => {
    await toggleTodo(id);
    loadTodos();
  };

  return (
    <div className="todo-container" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>📝 Todo App</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ marginBottom: "10px" }}>
         <span
            onClick={() => handleToggle(todo._id)}
              className={todo.completed ? "completed" : ""}
           >
             {todo.text}
             </span>

            <button
              onClick={() => handleDelete(todo._id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
