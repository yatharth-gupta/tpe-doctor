"use client";
import React from "react";

export const PatientRow = ({ patient, onReviewSession }) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-4 p-4 items-start md:items-center border-b border-indigo-50 hover:bg-gray-50 transition-colors">
      {/* Mobile Label + Value pairs */}
      <div className="flex flex-col w-full md:hidden space-y-4">
        <div className="flex justify-between items-center">
          <span className="font-medium">Patient Name</span>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-300"/>
            <span>{patient.name}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Session Date</span>
          <span>{patient.sessionDate}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Exercise</span>
          <span>{patient.exercise}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Duration</span>
          <span>{patient.duration}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-medium">Performance</span>
          <span className="px-3 py-1 text-xs text-blue-500 bg-indigo-50 rounded-lg">
            {patient.performance}%
          </span>
        </div>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:flex md:col-span-3 items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-zinc-300"/>
        <span>{patient.name}</span>
      </div>
      <div className="hidden md:block md:col-span-2">{patient.sessionDate}</div>
      <div className="hidden md:block md:col-span-2">{patient.exercise}</div>
      <div className="hidden md:block md:col-span-2">{patient.duration}</div>
      <div className="hidden md:block md:col-span-1">
        <span className="px-3 py-1 text-xs text-blue-500 bg-indigo-50 rounded-lg">
          {patient.performance}%
        </span>
      </div>
      <div className="w-full md:w-auto md:col-span-2">
        <button
          onClick={() => onReviewSession(patient.id)} // Update to pass patient.id
          className="w-full md:w-auto px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Review Session
        </button>
      </div>
    </div>
  );
};
