import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useTodo } from "./hooks/useTodo";
import { TodoItem } from "./components/TodoItem";

const MAX_CHARACTERS = 350;

export default function App() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const {
    todos,
    editId,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    startEditing,
  } = useTodo();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.length > MAX_CHARACTERS) {
      setError(`Todo text cannot exceed ${MAX_CHARACTERS} characters`);
      return;
    }
    addTodo(input);
    setInput("");
    setError("");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.length > MAX_CHARACTERS) {
      setError(`Todo text cannot exceed ${MAX_CHARACTERS} characters`);
    } else {
      setError("");
    }
    setInput(value);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-3xl font-bold mb-6">Todo App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className={`w-full p-2 border rounded ${
            error ? "border-red-500" : ""
          }`}
          placeholder="Add a todo"
        />
        {error && (
          <p className="text-red-500 text-sm mt-1">{error}</p>
        )}
        <div className="flex justify-between items-center mt-1">
          <span className="text-sm text-gray-500">
            {input.length}/{MAX_CHARACTERS} characters
          </span>
          <button
            type="submit"
            disabled={!input.trim() || input.length > MAX_CHARACTERS}
            className={`px-4 py-2 rounded ${
              !input.trim() || input.length > MAX_CHARACTERS
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Add Todo
          </button>
        </div>
      </form>
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editId={editId}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
            onStartEdit={startEditing}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}