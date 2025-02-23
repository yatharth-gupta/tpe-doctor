import React, { createContext, useContext, useState } from "react";

const ReviewSessionContext = createContext();
const mockReviewSessions = [
  {
    id: "PT001",
    name: "John Smith",
    sessionDate: "2024-01-15",
    exercise: "Climbing Temple Stairs",
    duration: "45 min",
    performance: 92,
  },
  {
    id: "PT002",
    name: "Sarah Johnson",
    sessionDate: "2024-01-14",
    exercise: "Pattern Puzzle",
    duration: "30 min",
    performance: 88,
  },
  {
    id: "PT003",
    name: "Michael Brown",
    sessionDate: "2024-01-13",
    exercise: "Focus Flow",
    duration: "25 min",
    performance: 76,
  },
  {
    id: "PT004",
    name: "Emma Davis",
    sessionDate: "2024-01-12",
    exercise: "Quick Reflexes",
    duration: "35 min",
    performance: 95,
  },
  {
    id: "PT005",
    name: "James Wilson",
    sessionDate: "2024-01-11",
    exercise: "Rhythm Flow",
    duration: "40 min",
    performance: 82,
  },
  {
    id: "PT006",
    name: "Olivia Smith",
    sessionDate: "2024-01-10",
    exercise: "Climbing Temple Stairs",
    duration: "45 min",
    performance: 90,
  },
  {
    id: "PT007",
    name: "William Johnson",
    sessionDate: "2024-01-09",
    exercise: "Pattern Puzzle",
    duration: "30 min",
    performance: 85,
  },
  {
    id: "PT008",
    name: "Sophia Brown",
    sessionDate: "2024-01-08",
    exercise: "Focus Flow",
    duration: "25 min",
    performance: 78,
  },
  {
    id: "PT009",
    name: "Ethan Davis",
    sessionDate: "2024-01-07",
    exercise: "Quick Reflexes",
    duration: "35 min",
    performance: 92,
  },
  {
    id: "PT010",
    name: "Ava Wilson",
    sessionDate: "2024-01-06",
    exercise: "Rhythm Flow",
    duration: "40 min",
    performance: 80,
  },
];
export const PatientProvider = ({ children }) => {
  const [pendingReviews, setPendingReviews] = useState(mockReviewSessions);
  const [pendingCount, setPendingCount] = useState(mockReviewSessions.length);

  const completeReview = (patientId) => {
    setPendingReviews((prev) => prev.filter((p) => p.id !== patientId));
    setPendingCount((prev) => prev - 1);
  };

  return (
    <ReviewSessionContext.Provider
      value={{ pendingReviews, pendingCount, completeReview }}
    >
      {children}
    </ReviewSessionContext.Provider>
  );
};

export const usePatients = () => useContext(ReviewSessionContext);
