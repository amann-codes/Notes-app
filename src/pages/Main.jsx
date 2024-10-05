import React, { useState, useEffect } from "react";
import GroupsSection from "../components/GroupsSection";
import NotesSection from "../components/NotesSection";

export default function Main() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust breakpoint as needed
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {(!isMobile || (isMobile && !selectedGroup)) && (
        <GroupsSection onSelectGroup={handleSelectGroup} isMobile={isMobile} />
      )}
      {(!isMobile || (isMobile && selectedGroup)) && (
        <NotesSection selectedGroup={selectedGroup} isMobile={isMobile} onBack={() => setSelectedGroup(null)} />
      )}
    </div>
  );
}