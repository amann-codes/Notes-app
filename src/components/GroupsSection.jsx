import React, { useState, useEffect } from "react";
import Add from "./Add";
import CreateGroup from "./CreateGroup";

export default function GroupsSection({ onSelectGroup, isMobile, selectedGroup }) {
  const [add, setAdd] = useState(false);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const loadGroups = () => {
      const storedGroups = JSON.parse(localStorage.getItem("groups")) || [];
      setGroups(storedGroups);
    };

    loadGroups();
  }, []);

  const handleCreateGroup = (groupName, color) => {
    const newGroup = {
      id: Date.now(),
      name: groupName,
      color,
      initials: getInitials(groupName),
      notes: [],
    };

    const updatedGroups = [...groups, newGroup];
    setGroups(updatedGroups);
    localStorage.setItem("groups", JSON.stringify(updatedGroups));
    setAdd(false);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <div className={`relative bg-white shadow-md flex flex-col ${isMobile ? 'w-full h-full' : 'w-[300px] h-screen'}`}>
      <p className="mx-auto text-3xl font-medium py-9">Pocket Notes</p>
      
      <div className="flex-1 overflow-y-auto p-3 scrollbar">
        {groups.map((group) => (
          <div 
            key={group.id} 
            className="flex items-center gap-4 mb-3 p-2 rounded-md cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectGroup(group)}
          >
            <div
              className="w-[50px] h-[50px] flex items-center justify-center rounded-full text-white text-lg font-medium"
              style={{ backgroundColor: group.color }}
            >
              {group.initials}
            </div>
            <p className="text-lg">{group.name}</p>
          </div>
        ))}
      </div>

      <Add createGroup={() => setAdd(true)} />

      {add && (
        <CreateGroup
          isOpen={add}
          onClose={() => setAdd(false)}
          createGroup={handleCreateGroup}
        />
      )}
    </div>
  );
}
