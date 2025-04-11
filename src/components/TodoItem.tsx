import { motion } from "framer-motion";
import { useState } from "react";
import { EditTodo } from "./EditTodo";
import { ConfirmDialog } from "./ConfirmDialog";

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoItemProps {
  todo: Todo;
  editId: number | null;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, text: string) => void;
  onStartEdit: (id: number | null) => void;
}

export const TodoItem = ({
  todo,
  editId,
  onToggle,
  onDelete,
  onEdit,
  onStartEdit,
}: TodoItemProps) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDelete = () => {
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    onDelete(todo.id);
    setShowConfirm(false);
  };

  const toggleExpand = (e: React.MouseEvent) => {
    if (e.detail === 1) { // Single click
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center mb-2 bg-gray-100 p-2 rounded"
      >
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
          className="mr-2"
        />
        {editId === todo.id ? (
          <EditTodo
            text={todo.text}
            id={todo.id}
            onEdit={onEdit}
            onCancel={() => onStartEdit(null)}
          />
        ) : (
          <div
            className={`flex-grow group relative ${
              todo.done ? "line-through text-gray-500" : ""
            }`}
            onDoubleClick={() => onStartEdit(todo.id)}
          >
            <div
              onClick={toggleExpand}
              className={`cursor-pointer ${
                isExpanded ? "" : "truncate"
              }`}
              style={{ maxWidth: isExpanded ? "none" : "200px" }}
            >
              {todo.text}
            </div>
            {!isExpanded && todo.text.length > 30 && (
              <span className="text-gray-500"></span>
            )}
            <span className="absolute left-0 -top-8 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
              Double click to edit
            </span>
          </div>
        )}
        <button
          onClick={handleDelete}
          className="ml-2 text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </motion.div>
      <ConfirmDialog
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirmDelete}
        message={todo.text}
      />
    </>
  );
}; 