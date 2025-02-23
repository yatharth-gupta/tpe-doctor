import React from "react";

const AnalyticsCard = ({ title, value, unit }) => {
  return (
    <div className="w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col items-start py-4 pr-12 pl-4 mx-auto w-full bg-white rounded-lg shadow-[0px_2px_4px_rgba(0,0,0,0.05)] max-md:pr-5 max-md:mt-10">
        <div className="text-sm text-stone-500">{title}</div>
        <div className="flex gap-1.5 mt-2 whitespace-nowrap">
          <div className="text-2xl font-semibold text-blue-500">{value}</div>
          <div className="my-auto text-sm text-stone-500">{unit}</div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
