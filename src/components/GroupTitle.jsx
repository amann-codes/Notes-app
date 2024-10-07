import React from "react";
import GroupLogo from "./GroupLogo.jsx";
import GroupName from "./GroupName.jsx";

export default function GroupTitle({ group }) {
  if (!group) return null;

  return (
    <div className="flex flex-row justify-start items-center p-3 gap-x-6 cursor-pointer">
      <GroupLogo color={group.color} initials={group.initials} />
      <GroupName name={group.name} />
    </div>
  );
}
