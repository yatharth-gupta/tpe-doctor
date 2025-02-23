import React from "react";

const StatCard = ({ label, value, type = "text" }) => {
  return (
    <div
      className="bg-[#F8F8F8] p-6 rounded-[8px]"
      role="group"
      aria-label={label}
    >
      <p className="text-[14px] text-[#666] mb-2">{label}</p>
      {type === "badge" ? (
        <div className="inline-block px-4 py-1 bg-[#E8F0FE] rounded-[7px]">
          <span className="text-[12px] text-[#4A90E2]">{value}</span>
        </div>
      ) : (
        <p className="text-[16px] text-black">{value}</p>
      )}
    </div>
  );
};

const PatientStats = ({ age, treatmentStart, progressLevel }) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      <StatCard label="Age" value={age} />
      <StatCard label="Treatment Start" value={treatmentStart} />
      <StatCard label="Progress Level" value={progressLevel} type="badge" />
    </div>
  );
};

export default PatientStats;
