"use client";
import React from "react";

export const TabNavigation = ({ activeTab, onTabChange, pendingCount }) => {
  const tabs = [
    { id: "ongoing", label: "Ongoing Patients" },
    { id: "completed", label: "Completed Treatment" },
    { id: "pending", label: "Pending Reviews", count: pendingCount }
  ];

  return (
    <nav className="flex flex-wrap gap-4 md:gap-8 self-start mt-5 text-sm border-b border-gray-200" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`relative pb-2 px-1 transition-colors hover:text-blue-600 
            ${activeTab === tab.id 
              ? "text-blue-600 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" 
              : "text-stone-500"}`}
          role="tab"
          aria-selected={activeTab === tab.id}
          aria-controls={`${tab.id}-panel`}
        >
          <span className="flex items-center gap-2">
            {tab.label}
            {tab.id === 'pending' && tab.count !== undefined && (
              <span className="px-2 py-1 text-xs font-medium text-red-500 bg-pink-100 rounded-full">
                {tab.count}
              </span>
            )}
          </span>
        </button>
      ))}
    </nav>
  );
};
