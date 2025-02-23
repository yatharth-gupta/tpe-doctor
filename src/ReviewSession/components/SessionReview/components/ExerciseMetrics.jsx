import React from "react";

const MetricBox = ({ label, value }) => (
  <div className="flex flex-col grow items-start py-6 pr-20 pl-6 w-full rounded-lg bg-stone-50 max-md:px-5 max-md:mt-6">
    <div className="text-sm text-stone-500">{label}</div>
    <div className="mt-2 text-base text-black">{value}</div>
  </div>
);

const ExerciseMetrics = () => {
  return (
    <div className="mt-8 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[33%] max-md:ml-0 max-md:w-full">
          <MetricBox label="Exercise Type" value="Climbing Temple Stairs" />
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <MetricBox label="Duration" value="45 minutes" />
        </div>
        <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start py-6 pr-20 pl-6 mx-auto w-full rounded-lg bg-stone-50 max-md:px-5 max-md:mt-6">
            <div className="text-sm text-stone-500">Performance Score</div>
            <div className="flex gap-2 mt-2 whitespace-nowrap">
              <div className="px-4 py-1 text-xs text-blue-500 bg-indigo-50 rounded-lg">
                95%
              </div>
              <div className="my-auto text-sm text-stone-500">Excellent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseMetrics;
