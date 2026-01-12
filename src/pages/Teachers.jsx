import React from "react";
import { useNavigate } from "react-router-dom";
import { useSchool } from "../context/SchoolContext";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

const Teachers = () => {
  const { teachers, deleteTeacher } = useSchool();
  const navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.stopPropagation();
    if (window.confirm("Rostdan ham o'chirmoqchimisiz?")) {
      deleteTeacher(id);
    }
  };

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">Teachers</h1>
        <div className="flex items-center gap-4">
          <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
          <button
            onClick={() => navigate("/teachers/add")}
            className="bg-[#509CDB] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
          >
            Add Teachers
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <CiSearch className="absolute left-3 top-3 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border-none outline-none text-sm shadow-sm"
        />
      </div>

      {teachers.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-10 bg-white h-[60vh] rounded-xl shadow-sm relative">
          <img
            src="https://img.freepik.com/free-vector/lazy-panda-sleeping-cartoon-icon-illustration-animal-nature-icon-concept-isolated-flat-cartoon-style_138676-2364.jpg?w=360"
            alt="No teachers"
            className="w-48 opacity-80 mix-blend-multiply"
          />
          <h2 className="text-3xl font-bold text-[#4F4F4F] mb-2">
            No Teachers at this time
          </h2>
          <p className="text-gray-400 mb-8 font-medium">
            Teachers will appear here after they enroll in your school.
          </p>
          <button className="bg-[#152259] text-white flex items-center gap-2 px-6 py-3 rounded-full shadow-lg absolute bottom-10 right-10">
            <BiSupport size={20} /> Support
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-gray-500 text-sm border-b">
                <th className="p-4 font-semibold">Name</th>
                <th className="p-4 font-semibold">Subject</th>
                <th className="p-4 font-semibold">Class</th>
                <th className="p-4 font-semibold">Email</th>
                <th className="p-4 font-semibold">Gender</th>
                <th className="p-4 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher, index) => (
                <tr
                  key={teacher.id}
                  onClick={() => navigate(`/teachers/${teacher.id}`)}
                  className={`cursor-pointer hover:bg-gray-50 transition-colors ${
                    index % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  }`}
                >
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={teacher.img || "https://via.placeholder.com/150"}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium text-gray-700 text-sm">
                      {teacher.name}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-gray-600">
                    {teacher.subject}
                  </td>
                  <td className="p-4 text-sm text-gray-600">{teacher.class}</td>
                  <td className="p-4 text-sm text-gray-600">{teacher.email}</td>
                  <td className="p-4 text-sm text-gray-600">
                    {teacher.gender}
                  </td>
                  <td className="p-4 text-sm">
                    <button
                      onClick={(e) => handleDelete(e, teacher.id)}
                      className="text-red-400 hover:text-red-600 p-2"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Teachers;
