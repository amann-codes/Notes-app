import React, { useState, useEffect } from 'react';
import image from './image.png'
export default function NotesSection({ selectedGroup, isMobile, onBack }) {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    if (selectedGroup) {
      setNotes(selectedGroup.notes || []);
    }
  }, [selectedGroup]);

  const handleAddNote = () => {
    if (newNote.trim() && selectedGroup) {
      const newNoteObj = {
        id: Date.now(),
        content: newNote,
        timestamp: new Date().toLocaleString(),
      };
      const updatedNotes = [...notes, newNoteObj];
      setNotes(updatedNotes);
      
      // Update local storage
      const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
      const updatedGroups = storedGroups.map(group => 
        group.id === selectedGroup.id ? {...group, notes: updatedNotes} : group
      );
      localStorage.setItem("groups", JSON.stringify(updatedGroups));
      
      setNewNote('');
    }
  };

  if (!selectedGroup) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-[#DAE5F5]">
        <img src={image} alt="Pocket Notes" className="mb-4 w-[500px]" />
        <h1 className="text-4xl font-bold mb-2">Pocket Notes</h1>
        <p className="text-xl text-gray-600">Select a group to view notes</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="bg-[#E8E8E8] p-4 flex items-center">
        {isMobile && (
          <button onClick={onBack} className="mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4"
          style={{ backgroundColor: selectedGroup.color }}
        >
          {selectedGroup.initials}
        </div>
        <h2 className="text-2xl font-bold">{selectedGroup.name}</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 bg-white">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-500">
            <p className="text-2xl mb-2">No notes yet</p>
            <p>Create your first note in {selectedGroup.name}</p>
          </div>
        ) : (
          notes.map((note) => (
            <div key={note.id} className="mb-4 p-3 bg-[#DAE5F5] rounded-md">
              <p>{note.content}</p>
              <p className="text-sm text-gray-500 mt-2">{note.timestamp}</p>
            </div>
          ))
        )}
      </div>
      
      <div className="p-4 bg-[#E8E8E8] sticky bottom-0">
        <div className="relative">
          <textarea
            className="w-full p-3 pr-12 rounded-md resize-none border-2 border-[#16008B]"
            rows="1"
            placeholder="Enter your text here..."
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></textarea>
          <button
            className={`absolute bottom-2 right-3 p-2 rounded-full ${newNote.trim() ? 'text-[#16008B]' : 'text-gray-300 cursor-not-allowed'}`}
            onClick={handleAddNote}
            disabled={!newNote.trim()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}