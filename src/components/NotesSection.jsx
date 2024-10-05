import React from "react";
import img from "./image.png";
import lock from "./lock.png";
export default function NotesSection() {
  return (
    <div className="relative w-full bg-[#DAE5F5]">
      <div className="flex h-screen  flex-col justify-center items-center">
        <img src={img} className="w-[500px]"></img>
        <div className="w-1/2 text-center mt-6">
          <p className="text-4xl font-bold mb-3">Pocket Notes</p>
          <p className="text-lg font-medium">
            Send and receive messages without keeping your phone online. Use
            Pocket Notes on up to 4 linked devices and 1 mobile phone
          </p>
        </div>
        <div className="absolute flex flex-row bottom-2">
          <img src={lock} className="w-[17px] h-[21px] mr-2"></img>
          <p>end-to-end encrypted</p>
        </div>
      </div>
    </div>
  );
}
