"use client";
import React, { useState } from "react";
import { TableHeader } from "./TableHeader";
import { Pagination } from "./Pagination";
import { useNavigate } from "react-router-dom";

const mockOngoingPatients = [
  {
    id: "PT001",
    name: "Sarah Johnson",
    lastSession: "2024-01-20",
    exercise: "Walking",
    progress: "high"
  },
  {
    id: "PT002",
    name: "Michael Chen",
    lastSession: "2024-01-19",
    exercise: "Strength Training",
    progress: "medium"
  },
  {
    id: "PT003",
    name: "Emily Brown",
    lastSession: "2024-01-18",
    exercise: "Physiotherapy",
    progress: "low"
  },
  {
    id: "PT004",
    name: "David Wilson",
    lastSession: "2024-01-20",
    exercise: "Balance Training",
    progress: "high"
  },
  {
    id: "PT005",
    name: "Lisa Anderson",
    lastSession: "2024-01-17",
    exercise: "Resistance Bands",
    progress: "medium"
  },
  {
    id: "PT006",
    name: "James Taylor",
    lastSession: "2024-01-16",
    exercise: "Gait Training",
    progress: "low"
  },
  {
    id: "PT007",
    name: "Anna Martinez",
    lastSession: "2024-01-20",
    exercise: "Joint Mobility",
    progress: "high"
  },
  {
    id: "PT008",
    name: "Robert Lee",
    lastSession: "2024-01-19",
    exercise: "Core Strength",
    progress: "medium"
  },
  {
    id: "PT009",
    name: "Sophie Clark",
    lastSession: "2024-01-18",
    exercise: "Stretching",
    progress: "low"
  },
  {
    id: "PT010",
    name: "William Garcia",
    lastSession: "2024-01-17",
    exercise: "Balance Control",
    progress: "high"
  }
];

const getProgressStyle = (progress) => {
  const styles = {
    low: "bg-red-50 text-red-500",
    medium: "bg-yellow-50 text-yellow-600",
    high: "bg-green-50 text-green-500"
  };
  return styles[progress] || styles.medium;
};

// Update PatientTableRow component
const PatientTableRow = ({ patient, onViewDetails }) => {
  const progressClass = getProgressStyle(patient.progress);
  
  return (
    <div className="grid grid-cols-12 gap-4 p-4 items-center hover:bg-gray-50 transition-colors">
      {/* Mobile View */}
      <div className="md:hidden col-span-12 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-medium">Patient Name</span>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-300"/>
            <span>{patient.name}</span>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Last Session</span>
          <span>{patient.lastSession}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Exercise</span>
          <span>{patient.exercise}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Progress</span>
          <span className={`px-3 py-1 text-xs rounded-lg capitalize ${progressClass}`}>
            {patient.progress}
          </span>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:col-span-3 items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-zinc-300"/>
        <span className="text-sm">{patient.name}</span>
      </div>
      <div className="hidden md:block md:col-span-2 text-sm">{patient.lastSession}</div>
      <div className="hidden md:block md:col-span-2 text-sm">{patient.exercise}</div>
      <div className="hidden md:block md:col-span-2 text-sm">
        <span className={`px-3 py-1 text-xs rounded-lg capitalize ${progressClass}`}>
          {patient.progress}
        </span>
      </div>
      <div className="hidden md:block md:col-span-3 text-sm">
        <button 
          onClick={() => onViewDetails(patient.id)}
          className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

// Update OngoingPatients component
const OngoingPatients = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleViewDetails = (patientId) => {
    navigate(`/patient/${patientId}`);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = mockOngoingPatients.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className="flex shrink-0 h-px bg-indigo-50" />
      <TableHeader tab={"ongoing"} />
      <div className="divide-y divide-indigo-50">
        {currentItems.map((patient) => (
          <PatientTableRow 
            key={patient.id} 
            patient={patient}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(mockOngoingPatients.length / itemsPerPage)}
        totalItems={mockOngoingPatients.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default OngoingPatients;