import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

const Exams = () => {
  const exams = [
    {
      subject: "Mathematics Final",
      date: "12",
      month: "JUN",
      time: "09:00 AM - 11:00 AM",
      room: "Room 301",
    },
    {
      subject: "Physics Mid-term",
      date: "14",
      month: "JUN",
      time: "10:00 AM - 12:00 PM",
      room: "Lab 2",
    },
    {
      subject: "English Literature",
      date: "18",
      month: "JUN",
      time: "01:00 PM - 03:00 PM",
      room: "Hall A",
    },
  ];

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">Exams Schedule</h1>
        <div className="flex items-center gap-4">
          <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
          <button className="bg-[#152259] text-white px-6 py-2 rounded-md text-sm">
            Create New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm h-80 flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 text-white">
          <div className="text-center">
            <h2 className="text-6xl font-bold mb-2">12</h2>
            <p className="text-xl uppercase tracking-widest">June 2024</p>
            <p className="mt-4 opacity-80">Today's Schedule</p>
          </div>
        </div>

        <div className="space-y-4">
          {exams.map((exam, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition"
            >
              <div className="bg-gray-100 p-3 rounded-lg text-center min-w-[70px]">
                <span className="block text-xl font-bold text-[#152259]">
                  {exam.date}
                </span>
                <span className="block text-xs font-bold text-gray-500">
                  {exam.month}
                </span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-[#4F4F4F]">{exam.subject}</h4>
                <div className="flex gap-4 mt-1 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <FaClock /> {exam.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt /> {exam.room}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exams;
