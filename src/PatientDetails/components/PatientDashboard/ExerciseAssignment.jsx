import React from "react";

const ExerciseAssignment = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="mb-8">
      <h2 className="text-[18px] font-semibold mb-4">Assign Exercise</h2>
      <form onSubmit={handleSubmit} className="bg-[#F8F8F8] p-6 rounded-[8px]">
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div>
            <label
              htmlFor="exerciseType"
              className="text-[14px] text-[#666] mb-2 block"
            >
              Exercise Type
            </label>
            <select
              id="exerciseType"
              className="w-full p-3 rounded-[8px] border-[1px] border-[#E8F0FE]"
              required
            >
              <option value="">Select Exercise</option>
              <option value="balance">Balance Training</option>
              <option value="strength">Strength Training</option>
              <option value="coordination">Coordination Exercise</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="difficulty"
              className="text-[14px] text-[#666] mb-2 block"
            >
              Difficulty Level
            </label>
            <select
              id="difficulty"
              className="w-full p-3 rounded-[8px] border-[1px] border-[#E8F0FE]"
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="parameters"
            className="text-[14px] text-[#666] mb-2 block"
          >
            Additional Parameters
          </label>
          <textarea
            id="parameters"
            className="w-full p-3 rounded-[8px] border-[1px] border-[#E8F0FE] h-[100px]"
            placeholder="Enter exercise parameters..."
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-[#4A90E2] text-white rounded-[8px] shadow-[0px_4px_6px_0px_rgba(74,144,226,0.20)]"
        >
          Assign Exercise
        </button>
      </form>
    </div>
  );
};

export default ExerciseAssignment;
