import React from "react";
import { CiBellOn } from "react-icons/ci";
import { FaWallet, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Billing = () => {
  const transactions = [
    {
      id: "#INV-001",
      student: "John Doe",
      date: "2 March 2024",
      amount: "$500",
      status: "Completed",
    },
    {
      id: "#INV-002",
      student: "Sarah Smith",
      date: "1 March 2024",
      amount: "$450",
      status: "Pending",
    },
    {
      id: "#INV-003",
      student: "Michael Brown",
      date: "28 Feb 2024",
      amount: "$500",
      status: "Completed",
    },
  ];

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">Billing</h1>
        <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
      </div>

  
      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="bg-[#152259] text-white p-6 rounded-xl shadow-lg relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-gray-300 text-sm mb-2">Total Balance</p>
            <h2 className="text-3xl font-bold">$125,000.00</h2>
          </div>
          <FaWallet className="absolute right-4 bottom-4 text-white opacity-20 text-6xl" />
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">Income (Month)</p>
            <h2 className="text-2xl font-bold text-green-600">+$12,400</h2>
          </div>
          <div className="bg-green-100 p-3 rounded-full text-green-600">
            <FaArrowUp />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm mb-1">Expenses (Month)</p>
            <h2 className="text-2xl font-bold text-red-600">-$3,200</h2>
          </div>
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <FaArrowDown />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-bold text-[#4F4F4F] mb-4">
          Recent Transactions
        </h3>
        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-400 text-sm border-b">
              <th className="pb-3">Invoice ID</th>
              <th className="pb-3">Student</th>
              <th className="pb-3">Date</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, i) => (
              <tr key={i} className="border-b last:border-none">
                <td className="py-4 text-sm font-medium text-blue-600">
                  {t.id}
                </td>
                <td className="py-4 text-sm text-gray-600">{t.student}</td>
                <td className="py-4 text-sm text-gray-500">{t.date}</td>
                <td className="py-4 text-sm font-bold text-gray-700">
                  {t.amount}
                </td>
                <td className="py-4 text-sm">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      t.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-orange-100 text-orange-700"
                    }`}
                  >
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Billing;
