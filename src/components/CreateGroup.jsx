import React, { useState } from "react";

export default function CreateGroup({ isOpen, onClose, createGroup }) {
  const [groupName, setGroupName] = useState("");
  const [selectedColor, setSelectedColor] = useState("#f97316"); // Default color

  const handleCreate = () => {
    if (groupName) {
      createGroup(groupName, selectedColor);
      onClose(); // Close modal after creating the group
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="w-[400px] p-6 rounded-md bg-white shadow-lg">
          <h2 className="text-lg font-bold mb-4">Create New Group</h2>
          
          {/* Group Name Input */}
          <input
            type="text"
            placeholder="Enter group name"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            className="w-full px-3 py-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Color Selection */}
          <label className="block mb-2 font-medium">Choose Color</label>
          <div className="flex gap-3 mb-4">
            {["#f97316", "#f43f5e", "#14b8a6", "#3b82f6", "#8b5cf6", "#1d4ed8"].map((color) => (
              <div
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full cursor-pointer border-2 ${selectedColor === color ? "border-black" : "border-transparent"}`}
                style={{ backgroundColor: color }}
              ></div>
            ))}
          </div>

          {/* Create and Cancel Buttons */}
          <div className="flex justify-end">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded mr-2"
              onClick={handleCreate}
            >
              Create
            </button>
            <button
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
