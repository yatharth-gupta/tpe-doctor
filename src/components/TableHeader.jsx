import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";

export const TableHeader = ({tab}) => {
  return (
    tab == "pending" ? (
    <div className="hidden md:grid grid-cols-12 gap-4 p-4 mt-6 bg-stone-50 rounded-lg sticky top-0 z-10">
      <div className="col-span-3 text-sm font-medium text-stone-500">Patient Name</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Session Date</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Exercise</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Duration</div>
      <div className="col-span-1 text-sm font-medium text-stone-500">Performance</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Actions</div>
    </div>):(<div className="hidden md:grid grid-cols-12 gap-4 p-4 mt-6 bg-stone-50 rounded-lg sticky top-0 z-10">
      <div className="col-span-3 text-sm font-medium text-stone-500">Patient Name</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Last Session</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Exercise</div>
      <div className="col-span-2 text-sm font-medium text-stone-500">Progress</div>
      <div className="col-span-3 text-sm font-medium text-stone-500">Actions</div>
    </div>)
  );
};
