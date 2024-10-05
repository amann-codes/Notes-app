import React from "react";

export default function Add({ createGroup }) {
  return (
    <div className="absolute right-4 bottom-4">
      <svg
        onClick={createGroup}
        className="cursor-pointer"
        width="60"  // Adjusted size
        height="60"  // Adjusted size
        viewBox="0 0 93 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="46.5" cy="46.5" r="46.5" fill="#16008B" />
        <path
          d="M63.3672 42.7246V50.1416H29.2559V42.7246H63.3672ZM50.3105 28.7793V65.0098H42.3467V28.7793H50.3105Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
