import React from "react";

const StatusBadge = ({ status, performance }) => {
  const isPerformance = typeof performance !== "undefined";
  const baseClasses = "px-3 py-1 rounded-[7px] text-[12px]";

  if (isPerformance) {
    return (
      <span className={`${baseClasses} bg-[#E8F0FE] text-[#4A90E2]`}>
        {performance}%
      </span>
    );
  }

  const statusStyles = {
    review: "bg-[#4A90E2] text-white",
    completed: "bg-[#4AE291] text-white",
  };

  return (
    <button
      className={`px-4 py-1 rounded-[8px] text-[14px] ${
        statusStyles[status.toLowerCase()]
      }`}
    >
      {status}
    </button>
  );
};

const DifficultyBadge = ({ level }) => {
  const styles = {
    hard: "bg-[#E8F0FE] text-[#4A90E2]",
    medium: "bg-[#FFF3E0] text-[#F5A623]",
    easy: "bg-[#E8F0FE] text-[#4A90E2]",
  };

  return (
    <span
      className={`px-3 py-1 rounded-[7px] text-[12px] ${
        styles[level.toLowerCase()]
      }`}
    >
      {level}
    </span>
  );
};

const CompletedSessions = ({ onReviewSession }) => {
  return (
    <div>
      <h2 className="text-[18px] font-semibold mb-4">Completed Sessions</h2>
      <div className="bg-[#F8F8F8] p-6 rounded-[8px]">
        <table className="w-full" role="table">
          <thead>
            <tr className="text-left text-[14px] text-[#666]">
              <th className="pb-4">Date</th>
              <th className="pb-4">Exercise</th>
              <th className="pb-4">Difficulty</th>
              <th className="pb-4">Performance</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E8F0FE]">
            <tr>
              <td className="py-4 text-[14px]">Mar 15, 2024</td>
              <td className="py-4 text-[14px]">Climbing Temple Stairs</td>
              <td className="py-4">
                <DifficultyBadge level="Hard" />
              </td>
              <td className="py-4">
                <StatusBadge performance="95" />
              </td>
              <td className="py-4" onClick={onReviewSession}>
                <StatusBadge  status="Review" />
              </td>
            </tr>
            <tr>
              <td className="py-4 text-[14px]">Mar 12, 2024</td>
              <td className="py-4 text-[14px]">Strength Training</td>
              <td className="py-4">
                <DifficultyBadge level="Medium" />
              </td>
              <td className="py-4">
                <StatusBadge performance="88" />
              </td>
              <td className="py-4">
                <StatusBadge status="Completed" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedSessions;
