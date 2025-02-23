import React from "react";

const AppointmentCard = ({ date, time, description }) => {
  return (
    <div className="bg-[#F8F8F8] p-4 rounded-[8px]">
      <div className="flex justify-between items-center mb-2">
        <span className="text-[14px] text-black">{date}</span>
        <span className="text-[12px] text-[#666]">{time}</span>
      </div>
      <p className="text-[14px] text-[#666]">{description}</p>
    </div>
  );
};

const AppointmentHistory = ({ appointments }) => {
  return (
    <div>
      <h2 className="text-[18px] font-semibold mb-4">Past Appointments</h2>
      <div className="space-y-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard
            key={index}
            date={appointment.date}
            time={appointment.time}
            description={appointment.description}
          />
        ))}
      </div>
    </div>
  );
};

export default AppointmentHistory;
