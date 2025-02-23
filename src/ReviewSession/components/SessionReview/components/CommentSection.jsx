import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePatients } from "../../../../context/ReviewSessionContext";

const CommentSection = ({ patientId }) => {
  const [comment, setComment] = useState("");
  const navigate = useNavigate();
  const { completeReview } = usePatients();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle comment submission
    setComment("");
  };

  const handleFinishReview = () => {
    completeReview(patientId);
    navigate("/");
  };

  return (
    <>
      <section aria-labelledby="comments-title">
        <h2
          id="comments-title"
          className="self-start mt-8 text-lg font-semibold text-black"
        >
          Patient Comments
        </h2>
        <div className="px-6 pt-6 pb-10 mt-4 rounded-lg bg-stone-50 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col p-4 w-full bg-white rounded-lg max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
              <time className="my-auto text-sm text-black">
                Jan 15, 2024 - 10:45 AM
              </time>
              <span className="px-3 py-1 text-xs text-blue-500 whitespace-nowrap bg-indigo-50 rounded-lg">
                Post-Session
              </span>
            </div>
            <p className="self-start mt-2 text-sm text-stone-500 max-md:max-w-full">
              The exercise was challenging but manageable. I felt more confident
              with each step and noticed improvement in my balance.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="add-comment-title">
        <h2
          id="add-comment-title"
          className="self-start mt-8 text-lg font-semibold text-black"
        >
          Add Your Comment
        </h2>
        <div className="p-6 mt-4 w-full rounded-lg bg-stone-50 max-md:px-5 max-md:max-w-full">
          <textarea
            className="w-full h-[100px] p-3 rounded-lg border border-indigo-50 border-solid resize-none"
            placeholder="Enter your comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            aria-label="Comment input"
          />
          <div className="flex gap-4 mt-6 max-w-full w-[397px]">
            <button
              onClick={handleSubmit}
              className="px-1.5 py-2 text-base text-white bg-blue-500 rounded-lg shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:pr-5"
              aria-label="Submit comment"
            >
              Submit Comment
            </button>
            <button
              onClick={handleFinishReview}
              className="px-10 pt-1.5 pb-3 text-base text-white bg-green-400 rounded-lg shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:px-5"
              aria-label="Complete review"
            >
              Finish Review
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CommentSection;
