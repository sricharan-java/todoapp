import { KeyboardEvent, useState } from "react";

const MAX_CHARACTERS = 350;

interface EditTodoProps {
  text: string;
  id: number;
  onEdit: (id: number, text: string) => void;
  onCancel: () => void;
}

export const EditTodo = ({ text, id, onEdit, onCancel }: EditTodoProps) => {
  const [value, setValue] = useState(text);
  const [error, setError] = useState("");

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (value.length > MAX_CHARACTERS) {
        setError(`Todo text cannot exceed ${MAX_CHARACTERS} characters`);
        return;
      }
      onEdit(id, value);
    } else if (e.key === "Escape") {
      onCancel();
    }
  };

  const handleBlur = () => {
    if (value.trim() !== text) {
      if (value.length > MAX_CHARACTERS) {
        setError(`Todo text cannot exceed ${MAX_CHARACTERS} characters`);
        return;
      }
      onEdit(id, value);
    } else {
      onCancel();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length > MAX_CHARACTERS) {
      setError(`Todo text cannot exceed ${MAX_CHARACTERS} characters`);
    } else {
      setError("");
    }
    setValue(newValue);
  };

  return (
    <div className="flex-grow">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        className={`w-full p-1 border rounded ${
          error ? "border-red-500" : ""
        }`}
        autoFocus
      />
      {error && (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      )}
      <div className="flex justify-between items-center mt-1">
        <span className="text-sm text-gray-500">
          {value.length}/{MAX_CHARACTERS} characters
        </span>
      </div>
    </div>
  );
}; 