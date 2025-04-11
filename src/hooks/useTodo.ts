import { useState } from "react";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export const useTodo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editId, setEditId] = useState<number | null>(null);

  const addTodo = (text: string) => {
    if (text.trim()) {
      setTodos([...todos, { id: Date.now(), text: text.trim(), done: false }]);
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
    setEditId(null);
  };

  const startEditing = (id: number | null) => {
    setEditId(id);
  };

  return {
    todos,
    editId,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    startEditing,
  };
}; 