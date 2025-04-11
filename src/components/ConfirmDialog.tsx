import { motion } from "framer-motion";
import { useState } from "react";

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  message,
}: ConfirmDialogProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen) return null;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Are you sure you want to delete?</h3>
          <div className="text-gray-700">
            <span
              onClick={toggleExpand}
              className={`cursor-pointer inline-block ${
                isExpanded ? "" : "truncate"
              }`}
              style={{ maxWidth: isExpanded ? "none" : "200px" }}
            >
              {message}
            </span>
            {!isExpanded && message.length > 30 && (
              <span className="text-gray-500"></span>
            )}
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}; 