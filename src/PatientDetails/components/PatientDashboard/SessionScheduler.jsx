import React from "react";

const SessionScheduler = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <h2 className="text-[18px] font-semibold mb-4">Schedule Session</h2>
      <form onSubmit={handleSubmit} className="bg-[#F8F8F8] p-6 rounded-[8px]">
        <div className="mb-4">
          <label htmlFor="date" className="text-[14px] text-[#666] mb-2 block">
            Date
          </label>
          <input
            id="date"
            type="date"
            className="w-full p-3 rounded-[8px] border-[1px] border-[#E8F0FE]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="time" className="text-[14px] text-[#666] mb-2 block">
            Time
          </label>
          <input
            id="time"
            type="time"
            className="w-full p-3 rounded-[8px] border-[1px] border-[#E8F0FE]"
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 px-6 py-2 bg-[#4A90E2] text-white rounded-[8px] shadow-[0px_4px_6px_0px_rgba(74,144,226,0.20)]"
          >
            Confirm Request
          </button>
          <button
            type="button"
            className="flex-1 px-6 py-2 bg-white border-[1px] border-[#E8F0FE] text-[#666] rounded-[8px]"
          >
            Reject Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default SessionScheduler;
