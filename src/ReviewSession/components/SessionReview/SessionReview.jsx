import React from "react";
import ExerciseMetrics from "./components/ExerciseMetrics";
import AnalyticsCard from "./components/AnalyticsCard";
import CommentSection from "./components/CommentSection";
import { useNavigate, useParams } from "react-router-dom";
import { usePatients } from "../../../context/ReviewSessionContext";

const SessionReview = () => {
  const navigate = useNavigate();
  const { patientId } = useParams();
  const { completeReview } = usePatients();

  const handleFinishReview = () => {
    completeReview(patientId);
    navigate("/");
  };

  return (
    <main className="overflow-hidden pb-3.5 bg-white" role="main">
      <div className="flex flex-col justify-center px-10 py-8 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
        <article className="flex flex-col p-8 w-full bg-white rounded-2xl border border-indigo-50 border-solid shadow-[0px_8px_10px_rgba(0,0,0,0.1)] max-md:px-5 max-md:max-w-full">
          <header className="flex flex-wrap gap-5 justify-between w-full max-md:max-w-full">
            <div className="flex gap-2.5 self-start">
              <h1 className="grow text-2xl font-semibold text-black">
                Session Review
              </h1>
              <time className="my-auto text-sm basis-auto text-stone-500">
                Jan 15, 2024 - 10:00 AM
              </time>
            </div>
            <button
              onClick={() => navigate("/")}
              className="px-1.5 py-2 text-base text-center text-white bg-blue-500 rounded-lg shadow-[0px_4px_6px_rgba(74,144,226,0.2)] max-md:pr-5"
              aria-label="Return to Dashboard"
            >
              Back to Dashboard
            </button>
          </header>

          <ExerciseMetrics />

          <section aria-labelledby="analytics-title">
            <h2
              id="analytics-title"
              className="self-start mt-8 text-lg font-semibold text-black"
            >
              Exercise Analytics
            </h2>
            <div className="p-6 mt-4 rounded-lg bg-stone-50 max-md:px-5 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <AnalyticsCard
                  title="Average Heart Rate"
                  value="85"
                  unit="BPM"
                />
                <AnalyticsCard title="Steps Climbed" value="248" unit="steps" />
                <AnalyticsCard
                  title="Average Speed"
                  value="18"
                  unit="steps/min"
                />
                <AnalyticsCard
                  title="Calories Burned"
                  value="186"
                  unit="kcal"
                />
              </div>
            </div>
          </section>

          <section aria-labelledby="progress-title">
            <h2
              id="progress-title"
              className="self-start mt-8 text-lg font-semibold text-black"
            >
              Progress Chart
            </h2>
            <div className="px-16 pt-36 pb-28 mt-4 text-base rounded-lg bg-stone-50 text-stone-500 max-md:px-5 max-md:pt-24 max-md:pb-28 max-md:max-w-full">
              Progress Chart Placeholder
            </div>
          </section>

          <CommentSection patientId={patientId} />
        </article>
      </div>
    </main>
  );
};

export default SessionReview;
