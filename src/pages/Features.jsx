import React from "react";
import { CiBellOn } from "react-icons/ci";
import {
  FaBus,
  FaBook,
  FaUtensils,
  FaFirstAid,
  FaWifi,
  FaLaptop,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      name: "Transport",
      icon: <FaBus />,
      active: true,
      desc: "School bus tracking system",
    },
    {
      name: "Library",
      icon: <FaBook />,
      active: true,
      desc: "Digital library access",
    },
    {
      name: "Cafeteria",
      icon: <FaUtensils />,
      active: false,
      desc: "Online food ordering",
    },
    {
      name: "Medical",
      icon: <FaFirstAid />,
      active: true,
      desc: "Health records",
    },
    {
      name: "Wi-Fi Zone",
      icon: <FaWifi />,
      active: false,
      desc: "Campus wide internet",
    },
    {
      name: "E-Learning",
      icon: <FaLaptop />,
      active: true,
      desc: "Video lessons platform",
    },
  ];

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">School Features</h1>
        <div className="flex items-center gap-2">
          <span className="bg-yellow-400 text-xs font-bold px-2 py-1 rounded text-black">
            PRO
          </span>
          <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl shadow-sm border-2 transition cursor-pointer ${
              item.active
                ? "bg-white border-transparent"
                : "bg-gray-50 border-gray-200 grayscale"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl ${
                  item.active ? "bg-[#509CDB]" : "bg-gray-400"
                }`}
              >
                {item.icon}
              </div>
              <div
                className={`w-10 h-6 rounded-full p-1 flex items-center ${
                  item.active
                    ? "bg-green-500 justify-end"
                    : "bg-gray-300 justify-start"
                }`}
              >
                <div className="w-4 h-4 bg-white rounded-full shadow-md"></div>
              </div>
            </div>
            <h3 className="font-bold text-lg text-[#4F4F4F]">{item.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
