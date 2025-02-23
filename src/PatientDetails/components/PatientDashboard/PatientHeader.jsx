import React from "react";

const PatientHeader = ({ name, patientId, photoUrl }) => {
  return (
    <div className="flex items-center justify-between mb-8" role="banner">
      <div className="flex items-center gap-4">
        <img
          src={photoUrl}
          className="w-12 h-12 rounded-[7px]"
          alt={`Profile photo of ${name}`}
        />
        <div>
          <h1 className="text-[24px] font-semibold text-black">{name}</h1>
          <p className="text-[14px] text-[#666]">Patient ID: {patientId}</p>
        </div>
      </div>
      <button
        className="px-6 py-2 bg-[#4A90E2] text-white rounded-[8px] shadow-[0px_4px_6px_0px_rgba(74,144,226,0.20)]"
        aria-label="Edit patient profile"
      >
        Edit Profile
      </button>
    </div>
  );
};

export default PatientHeader;
