"use client";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TableHeader } from "./TableHeader";
import { PatientRow } from "./PatientRow";
import { Pagination } from "./Pagination";
import { usePatients } from "../context/ReviewSessionContext";

export const PendingReviews = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const { pendingReviews } = usePatients();
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = pendingReviews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(pendingReviews.length / itemsPerPage);

  const handleReviewSession = (patientId) => {
    navigate(`/session-review/${patientId}`);
  };

  return (
    <>
      <div className="flex shrink-0 h-px bg-indigo-50" />
      <TableHeader tab={"pending"} />
      <div className="divide-y divide-indigo-50">
        {currentItems.map((patient) => (
          <PatientRow
            key={patient.id}
            patient={patient}
            onReviewSession={handleReviewSession}
          />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={pendingReviews.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default PendingReviews;