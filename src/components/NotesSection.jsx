import React, { useState, useEffect } from "react";
import image from "./image.png";

export default function NotesSection({ selectedGroup, isMobile, onBack }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    const loadNotes = () => {
      if (selectedGroup) {
        const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
        const currentGroup = storedGroups.find(
          (group) => group.id === selectedGroup.id
        );
        if (currentGroup) {
          setNotes(currentGroup.notes || []);
        }
      }
    };

    loadNotes();
  }, [selectedGroup]);

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);

    const dateStr = date.toLocaleString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const timeStr = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    return (
      <div className="flex flex-row text-right items-center text-sm text-gray-500 gap-x-3">
        <div>{dateStr}</div>
        <span className="w-1 h-1 bg-gray-500 rounded-full"></span>
        <span>{timeStr}</span>
      </div>
    );
  };

  const handleAddNote = () => {
    if (newNote.trim() && selectedGroup) {
      const newNoteObj = {
        id: Date.now(),
        content: newNote,
        timestamp: new Date().toISOString(),
      };

      const updatedNotes = [...notes, newNoteObj];
      setNotes(updatedNotes);

      const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
      const updatedGroups = storedGroups.map((group) =>
        group.id === selectedGroup.id
          ? { ...group, notes: updatedNotes }
          : group
      );
      localStorage.setItem("groups", JSON.stringify(updatedGroups));

      setNewNote("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAddNote();
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="bg-[#001F8B] p-4 flex items-center">
        {isMobile && (
          <button onClick={onBack} className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4"
          style={{ backgroundColor: selectedGroup?.color }}
        >
          {selectedGroup?.initials}
        </div>
        <h2 className="text-2xl font-bold text-white">{selectedGroup?.name}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 bg-[#DAE5F5]">
        {!notes.length ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="text-2xl mb-2">No notes yet</p>
            <p>Create your first note in {selectedGroup?.name}</p>
          </div>
        ) : (
          notes.map((note) => (
            <div className="flex flex-col mb-4 p-3 bg-[#FFFFFF] rounded-md">
              <p className="mb-2">{note.content}</p>
              <div className="flex justify-end">
                {formatTimestamp(note.timestamp)}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="p-4 bg-[#001F8B] sticky bottom-0">
        <div className="relative">
          <textarea
            className="w-full p-3 pr-12 rounded-md resize-none border-2 border-[#16008B]"
            rows="1"
            placeholder="Here’s the sample text for sample work"
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            onKeyDown={handleKeyDown}
          ></textarea>
          <button
            className={`absolute bottom-2 right-3 p-2 rounded-full ${
              newNote.trim()
                ? "text-[#16008B] cursor-pointer"
                : "text-gray-300 cursor-not-allowed"
            }`}
            onClick={handleAddNote}
            disabled={!newNote.trim()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
