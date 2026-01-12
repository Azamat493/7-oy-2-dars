import React from "react";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { FaUserGraduate, FaEye } from "react-icons/fa";

const Students = () => {
  const students = [
    {
      id: 1,
      name: "John Doe",
      class: "Class 5",
      phone: "+123 456 7890",
      status: "Paid",
      img: "https://i.pravatar.cc/150?u=10",
    },
    {
      id: 2,
      name: "Sarah Smith",
      class: "Class 4",
      phone: "+123 555 0199",
      status: "Unpaid",
      img: "https://i.pravatar.cc/150?u=20",
    },
    {
      id: 3,
      name: "Michael Brown",
      class: "Class 5",
      phone: "+123 999 8888",
      status: "Paid",
      img: "https://i.pravatar.cc/150?u=30",
    },
    {
      id: 4,
      name: "Emily Davis",
      class: "Class 3",
      phone: "+123 777 1234",
      status: "Pending",
      img: "https://i.pravatar.cc/150?u=40",
    },
  ];

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">Students</h1>
        <div className="flex items-center gap-4">
          <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
          <button className="bg-[#509CDB] text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition">
            Add Student
          </button>
        </div>
      </div>

      <div className="relative mb-6">
        <CiSearch className="absolute left-3 top-3 text-gray-400 text-xl" />
        <input
          type="text"
          placeholder="Search students..."
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border-none outline-none text-sm shadow-sm"
        />
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b bg-gray-50">
              <th className="p-4 font-semibold">Name</th>
              <th className="p-4 font-semibold">ID</th>
              <th className="p-4 font-semibold">Class</th>
              <th className="p-4 font-semibold">Phone</th>
              <th className="p-4 font-semibold">Fee Status</th>
              <th className="p-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className="border-b last:border-none hover:bg-gray-50 transition"
              >
                <td className="p-4 flex items-center gap-3">
                  <img
                    src={student.img}
                    alt=""
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="font-medium text-gray-700 text-sm">
                    {student.name}
                  </span>
                </td>
                <td className="p-4 text-sm text-gray-500">
                  #{1000 + student.id}
                </td>
                <td className="p-4 text-sm text-gray-600">{student.class}</td>
                <td className="p-4 text-sm text-gray-600">{student.phone}</td>
                <td className="p-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      student.status === "Paid"
                        ? "bg-green-100 text-green-600"
                        : student.status === "Unpaid"
                        ? "bg-red-100 text-red-600"
                        : "bg-yellow-100 text-yellow-600"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>
                <td className="p-4 text-sm">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
