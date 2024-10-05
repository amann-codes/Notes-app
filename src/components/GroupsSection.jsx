import React from "react";
import Add from "./Add";
import GroupTitle from "./GroupTitle";

export default function GroupsSection() {
  return (
    <div className="relative w-[500px] h-screen bg-white shadow-md flex flex-col justify-start">
      <p className="mx-auto text-3xl font-medium py-9">Pocket Notes</p>
      <div className="w-full flex flex-col bg-white overflow-y-auto p-3 scrollbar pt-3">
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
        <GroupTitle/>
      </div>
      <Add />
    </div>
  );
}
