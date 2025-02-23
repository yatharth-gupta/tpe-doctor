"use client";
import React from "react";

export const SearchBar = () => {
  return (
    <div className="flex gap-4 md:gap-10 px-3 md:px-3.5 py-2 md:py-2.5 text-sm rounded-lg border border-indigo-50 border-solid text-neutral-400 w-full md:w-auto">
      <input
        type="text"
        placeholder="Search sessions..."
        className="bg-transparent outline-none flex-1 min-w-[200px]"
        aria-label="Search sessions"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/f3ef36b6f36d4263b71f67b5e8de8e0b/cf0cba32f384fc0cfd1c6959a1085a0c8774bfa01b3add982240d9139422d98c"
        className="object-contain w-5 aspect-square"
        alt="Search icon"
      />
    </div>
  );
};
