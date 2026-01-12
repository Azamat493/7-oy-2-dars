import React from "react";
import { useSchool } from "../context/SchoolContext";
import { CiBellOn } from "react-icons/ci";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaMoneyBillWave,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const Dashboard = () => {
  const { user, logout, teachers } = useSchool();

  const performanceData = [
    { name: "Jan", Math: 40, English: 24 },
    { name: "Feb", Math: 30, English: 13 },
    { name: "Mar", Math: 20, English: 98 },
    { name: "Apr", Math: 27, English: 39 },
    { name: "May", Math: 18, English: 48 },
    { name: "Jun", Math: 23, English: 38 },
    { name: "Jul", Math: 34, English: 43 },
  ];

  const studentData = [
    { name: "Class 1", boys: 40, girls: 24 },
    { name: "Class 2", boys: 30, girls: 13 },
    { name: "Class 3", boys: 20, girls: 58 },
    { name: "Class 4", boys: 27, girls: 39 },
    { name: "Class 5", boys: 18, girls: 48 },
  ];

  const stats = [
    {
      title: "Students",
      count: "932",
      icon: <FaUserGraduate />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Teachers",
      count: teachers ? teachers.length : 0,
      icon: <FaChalkboardTeacher />,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Parents",
      count: "890",
      icon: <FaUsers />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Earnings",
      count: "$54,000",
      icon: <FaMoneyBillWave />,
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#4F4F4F]">Admin Dashboard</h1>

          <p className="text-gray-500 text-sm mt-1">
            Welcome back,{" "}
            <span className="font-semibold text-[#152259]">
              {user?.name || "Admin"}
            </span>
            !
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-white p-2.5 rounded-full shadow-sm cursor-pointer hover:bg-gray-50 transition relative">
            <CiBellOn className="text-2xl text-gray-500" />

            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <button
            onClick={logout}
            className="bg-[#152259] text-white px-6 py-2.5 rounded-lg font-medium text-sm hover:bg-blue-900 transition shadow-lg flex items-center gap-2"
          >
            Log out
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4 hover:shadow-md transition-transform hover:-translate-y-1 cursor-pointer"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center text-2xl ${item.color}`}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-gray-500 text-sm font-medium">{item.title}</p>
              <h3 className="text-2xl font-bold text-[#4F4F4F] mt-1">
                {item.count}
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-[#4F4F4F]">
              School Performance
            </h3>
            <select className="bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded px-2 py-1 outline-none">
              <option>This Month</option>
              <option>Last Month</option>
            </select>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                  itemStyle={{ fontSize: "12px" }}
                />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <Line
                  type="monotone"
                  dataKey="Math"
                  stroke="#152259"
                  strokeWidth={3}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="English"
                  stroke="#509CDB"
                  strokeWidth={3}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-[#4F4F4F]">
              Students by Class
            </h3>
            <select className="bg-gray-50 border border-gray-200 text-gray-600 text-xs rounded px-2 py-1 outline-none">
              <option>Filter by Class</option>
            </select>
          </div>

          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={studentData} barGap={8}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  stroke="#f0f0f0"
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dy={10}
                />
                <YAxis
                  stroke="#9ca3af"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  dx={-10}
                />
                <Tooltip
                  cursor={{ fill: "#F9FAFB" }}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                  }}
                />
                <Legend wrapperStyle={{ paddingTop: "20px" }} />
                <Bar
                  dataKey="boys"
                  name="Boys"
                  fill="#152259"
                  radius={[4, 4, 0, 0]}
                  barSize={12}
                />
                <Bar
                  dataKey="girls"
                  name="Girls"
                  fill="#509CDB"
                  radius={[4, 4, 0, 0]}
                  barSize={12}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
