"use client";
import React from "react";

export const Pagination = ({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-10 w-full text-sm text-stone-500">
      <div className="my-auto">
        Showing {startItem}-{endItem} of {totalItems} sessions
      </div>
      <nav
        className="flex gap-5 items-center whitespace-nowrap"
        aria-label="Pagination"
      >
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="grow self-stretch my-auto text-center disabled:opacity-50"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`self-stretch px-3 w-7 h-7 rounded-md ${
              currentPage === page ? "text-white bg-blue-500" : "text-stone-500"
            }`}
            aria-current={currentPage === page ? "page" : undefined}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="self-stretch my-auto text-center disabled:opacity-50"
        >
          Next
        </button>
      </nav>
    </div>
  );
};
