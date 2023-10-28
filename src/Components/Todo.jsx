// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    //  checking if is empty or not
    if (newTodo.trim() !== "") {
      // Adding the new todo to the list and reset the input
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const editTodo = (index) => {
    setEditIndex(index);

    setNewTodo(todos[index]);
  };

  const saveEdit = () => {
    if (newTodo.trim() !== "") {
      const updatedTodos = [...todos];

      updatedTodos[editIndex] = newTodo;

      setTodos(updatedTodos);
      setNewTodo("");
      setEditIndex(null);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);

    setTodos(updatedTodos);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <div className="flex space-x-2">
        <input
          type="text"
          className="border p-1 flex-1"
          placeholder="Add a new task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        {editIndex === null ? (
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={addTodo}
          >
            Add
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={saveEdit}
          >
            Save
          </button>
        )}
      </div>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 flex items-center">
            {editIndex === index ? (
              <input
                type="text"
                className="border p-1 flex-1"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
              />
            ) : (
              todo
            )}
            <button
              className="bg-yellow-500 text-white p-2 rounded mr-2"
              onClick={() => editTodo(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white p-2 rounded"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
<div>
  <h3
    style={{
      color: "red",
    }}
  >
    To Do List
  </h3>
</div>;

export default Todo;
