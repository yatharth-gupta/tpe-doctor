import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import { TabNavigation } from "./TabNavigation";
import { PendingReviews } from "./PendingReviews";
import OngoingPatients from "./OngoingPatients";
import { usePatients } from "../context/ReviewSessionContext";

const PatientManagement = () => {
  const [activeTab, setActiveTab] = useState("ongoing");
  const { pendingCount } = usePatients();

  const renderActiveTab = () => {
    switch (activeTab) {
      case "ongoing":
        return <OngoingPatients />;
      case "pending":
        return <PendingReviews />;
      case "completed":
        return <div>Completed Treatments</div>;
      default:
        return <OngoingPatients />;
    }
  };

  return (
    <main className="overflow-hidden bg-white min-h-screen">
      <div className="px-4 md:px-9 pt-4 md:pt-8 pb-24 md:pb-48 bg-stone-50">
        <section className="py-4 md:py-8 bg-white rounded-2xl border border-indigo-50 border-solid shadow-[0px_8px_10px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col px-8 w-full max-md:px-5">
            <header className="flex flex-wrap gap-5 justify-between w-full">
              <h1 className="text-2xl font-semibold text-black">
                Patient Management
              </h1>
              <SearchBar />
            </header>

            <TabNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
              pendingCount={pendingCount}
            />
          </div>

          <div className="px-4 md:px-8 w-full">
            {renderActiveTab()}
          </div>
        </section>
      </div>
    </main>
  );
};

export default PatientManagement;