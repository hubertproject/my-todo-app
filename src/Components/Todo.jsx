// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Todo = () => {
  // State to manage the list of todos, the new todo input, and the currently edited todo
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  // Function to add a new todo
  const addTodo = () => {
    // Check if the input is not empty
    if (newTodo.trim() !== "") {
      // Add the new todo to the list and reset the input
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // Function to edit a todo
  const editTodo = (index) => {
    // Set the editIndex to the index of the todo to be edited
    setEditIndex(index);
    // Set the input field with the todo text for editing
    setNewTodo(todos[index]);
  };

  // Function to save the edited todo
  const saveEdit = () => {
    // Check if the input is not empty
    if (newTodo.trim() !== "") {
      // Copy the existing todos array
      const updatedTodos = [...todos];
      // Update the todo at the editIndex
      updatedTodos[editIndex] = newTodo;
      // Set the updated todos and reset the input and editIndex
      setTodos(updatedTodos);
      setNewTodo("");
      setEditIndex(null);
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    // Filter out the todo to be deleted
    const updatedTodos = todos.filter((_, i) => i !== index);
    // Set the updated todos
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

export default Todo;
