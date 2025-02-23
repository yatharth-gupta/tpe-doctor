import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import PatientHeader from "./PatientHeader";
import PatientStats from "./PatientStats";
import ProgressChart from "./ProgressChart";
import AppointmentHistory from "./AppointmentHistory";
import SessionScheduler from "./SessionScheduler";
import ExerciseAssignment from "./ExerciseAssignment";
import CompletedSessions from "./CompletedSessions";

const mockOngoingPatients = [
  {
    id: "PT001",
    name: "Sarah Johnson",
    age: "42 years",
    treatmentStart: "Mar 15, 2024",
    progressLevel: "High",
    appointments: [
      {
        date: "Mar 15, 2024",
        time: "10:30 AM",
        description: "Completed balance exercises with improved stability",
      },
      {
        date: "Mar 12, 2024",
        time: "2:15 PM",
        description: "Focus training session - good progress on coordination",
      },
    ],
  },
  // Add more patients as needed
];

const PatientDashboard = () => {
  const { patientId } = useParams();
  const navigate = useNavigate();

  const handleReviewSession = () => {
    navigate(`/session-review/${patientId}`);
  };

  // Find patient data from mockOngoingPatients
  const patient = mockOngoingPatients.find(p => p.id === patientId);

  if (!patient) {
    return <div>Patient not found</div>;
  }

  return (
    <div className="flex flex-col font-[Poppins] min-h-screen w-full bg-[#F8F8F8]">
      <main className="m-8 p-8 bg-white rounded-[16px] border-[1px] border-[#E8F0FE] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.10),0px_8px_10px_0px_rgba(0,0,0,0.10)]">
        <PatientHeader
          name={patient.name}
          patientId={patient.id}
          photoUrl="https://placehold.co/48x48"
        />

        <PatientStats
          age={patient.age}
          treatmentStart={patient.treatmentStart}
          progressLevel={patient.progressLevel}
        />

        <ProgressChart />

        <div className="grid grid-cols-2 gap-6 mb-8">
          <AppointmentHistory appointments={patient.appointments} />
          <SessionScheduler />
        </div>

        <ExerciseAssignment />
        <CompletedSessions onReviewSession={handleReviewSession} />

        <div className="flex gap-4 mt-4">
          <button
            onClick={() => navigate('/')}
            className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Patient List
          </button>
        </div>
      </main>

      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              "<link href=&quot;https://fonts.googleapis.com/css2?family=Poppins&display=swap&quot; rel=&quot;stylesheet&quot;>",
          }}
        />
      </div>
    </div>
  );
};

export default PatientDashboard;
