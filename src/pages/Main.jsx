import React from "react";
import GroupsSection from "../components/GroupsSection";
import NotesSection from "../components/NotesSection";

export default function Main() {
  return (
    <div className="flex flex-row justify-start">
      <GroupsSection />
      <NotesSection />
    </div>
  );
}
