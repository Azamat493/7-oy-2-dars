import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaWallet,
  FaCog,
  FaChartBar,
} from "react-icons/fa";
import Ellipse6 from "../assets/images/Ellipse6.png";
const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", icon: <FaHome />, path: "/" },
    { name: "Teachers", icon: <FaChalkboardTeacher />, path: "/teachers" },
    { name: "Students", icon: <FaUserGraduate />, path: "/students" },
    { name: "Billing", icon: <FaWallet />, path: "/billing" },
    { name: "Settings and profile", icon: <FaCog />, path: "/settings" },
    { name: "Exams", icon: <FaChartBar />, path: "/exams" },
  ];

  return (
    <div className="w-64 bg-[#152259] min-h-screen text-white flex flex-col fixed left-0 top-0 z-50 overflow-y-auto">
      <div className="p-6 flex flex-col items-center border-b border-blue-900">
        <img src={Ellipse6} alt="" />
        <h1 className="text-sm font-semibold mt-5">Udemy Inter. school</h1>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-sm font-medium transition-colors duration-200 ${
                isActive
                  ? "bg-[#509CDB] text-white"
                  : "text-gray-300 hover:bg-blue-900 hover:text-white"
              }`
            }
          >
            <span className="mr-3 text-lg">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}

        <NavLink
          to="/features"
          className={({ isActive }) =>
            `flex items-center px-6 py-3 mt-10 text-sm font-medium transition-colors ${
              isActive ? "bg-[#509CDB]" : "text-gray-300 hover:bg-blue-900"
            }`
          }
        >
          <span className="mr-3">
            <FaChartBar />
          </span>
          Features
          <span className="ml-auto bg-[#BDBDBD] text-[10px] px-2 py-0.5 rounded text-black font-bold">
            NEW
          </span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
