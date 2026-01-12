import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSchool } from "../context/SchoolContext";
import { CiBellOn } from "react-icons/ci";
import { FaGraduationCap, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const TeacherDetails = () => {
  const { id } = useParams();
  const { getTeacherById } = useSchool();
  const [teacher, setTeacher] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundTeacher = getTeacherById(id);
    if (foundTeacher) {
      setTeacher(foundTeacher);
    } else {
      navigate("/teachers");
    }
  }, [id, getTeacherById, navigate]);

  if (!teacher) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-8 w-full max-w-5xl mx-auto min-h-screen">
      <div className="flex justify-end items-center mb-8 gap-4">
        <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
        <button
          onClick={() => navigate("/")}
          className="text-gray-500 font-medium hover:text-red-500"
        >
          Log out
        </button>
      </div>

      <div className="bg-white p-12 rounded-xl shadow-sm flex flex-col md:flex-row gap-12 items-start relative">
        <button
          onClick={() => navigate("/teachers")}
          className="absolute top-6 left-6 text-gray-400 hover:text-blue-500 text-sm"
        >
          &larr; Back to list
        </button>

        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="w-64 h-64 rounded-full overflow-hidden mb-6 border-4 border-gray-100 bg-gray-100">
            <img
              src={teacher.img || "https://via.placeholder.com/300"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-[#1A1A1A]">{teacher.name}</h2>
          <p className="text-gray-500 text-sm mb-8">{teacher.email}</p>

          <div className="flex gap-4">
            <button className="w-12 h-12 bg-[#EFF3FA] rounded-lg flex items-center justify-center text-[#1A1A1A] hover:bg-blue-100">
              <FaGraduationCap size={20} />
            </button>
            <button className="w-12 h-12 bg-[#EFF3FA] rounded-lg flex items-center justify-center text-[#1A1A1A] hover:bg-blue-100">
              <FaPhoneAlt size={18} />
            </button>
            <button className="w-12 h-12 bg-[#EFF3FA] rounded-lg flex items-center justify-center text-[#1A1A1A] hover:bg-blue-100">
              <FaEnvelope size={18} />
            </button>
          </div>
        </div>

        <div className="flex-1 pt-4">
          <h3 className="text-lg font-bold text-[#1A1A1A] mb-4">About</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-10 min-h-[80px]">
            {teacher.about || "No information provided yet."}
          </p>

          <div className="grid grid-cols-2 gap-y-8 gap-x-12">
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                Subject
              </h4>
              <p className="text-gray-500 text-sm">{teacher.subject}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                Class
              </h4>
              <p className="text-gray-500 text-sm">{teacher.class}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                Age
              </h4>
              <p className="text-gray-500 text-sm">{teacher.age}</p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider mb-1">
                Gender
              </h4>
              <p className="text-gray-500 text-sm">{teacher.gender}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDetails;
