import { MdAccountCircle, MdBrightness4, MdSearch } from "react-icons/md";
import { Sidebar } from "./";
import { useState } from "react";

export default function Navbar() {
  return (
    <div className="flex">
      <div className="flex-grow absolute w-full left-auto">
        <div className="bg-[#1976d3] shadow-lg text-white">
          <div className="h-20 mx-5 flex justify-between items-center ml-[260px] ">
            <MdBrightness4 className="h-[30px] w-[30px] cursor-pointer" />

            {/* Search */}
            <div className="flex border-b-2 py-1 gap-2 hover:border-red-500 ">
              <MdSearch className="h-6 w-6 " />
              <input className="bg-inherit outline-none" />
            </div>

            {/* Login button */}
            <div className="flex items-center gap-1 cursor-pointer hover:bg-black/5 hover:rounded-lg p-2">
              <h1>LOGIN</h1>
              <MdAccountCircle className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar */}
      <div className="relative z-50 overflow-y-auto flex">
        <Sidebar />
      </div>
    </div>
  );
}
