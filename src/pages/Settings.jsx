import React from "react";
import { CiBellOn } from "react-icons/ci";

const Settings = () => {
  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">
          Settings and Profile
        </h1>
        <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
      </div>

      <div className="bg-white rounded-xl shadow-sm p-8">
        <div className="flex items-center gap-6 mb-10 border-b pb-8">
          <img
            src="https://i.pravatar.cc/150?u=admin"
            alt="Admin"
            className="w-24 h-24 rounded-full border-4 border-[#F3F4FF]"
          />
          <div>
            <h2 className="text-xl font-bold text-[#4F4F4F]">Admin User</h2>
            <p className="text-gray-500 text-sm">School Administrator</p>
            <button className="text-[#509CDB] text-sm mt-2 font-medium">
              Change Profile Photo
            </button>
          </div>
        </div>

        <form className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-gray-600 text-sm mb-2">
              School Name
            </label>
            <input
              type="text"
              defaultValue="Udemy Inter. school"
              className="w-full border border-gray-300 rounded p-3 outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-2">
              Admin Email
            </label>
            <input
              type="email"
              defaultValue="admin@udemy.school"
              className="w-full border border-gray-300 rounded p-3 outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-2">
              Phone Number
            </label>
            <input
              type="text"
              defaultValue="+123 456 789"
              className="w-full border border-gray-300 rounded p-3 outline-none focus:border-blue-500 text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm mb-2">Language</label>
            <select className="w-full border border-gray-300 rounded p-3 outline-none text-sm bg-white">
              <option>English</option>
              <option>Uzbek</option>
              <option>Russian</option>
            </select>
          </div>

          <div className="col-span-2 mt-4">
            <h3 className="font-bold text-[#4F4F4F] mb-4">Notifications</h3>
            <div className="flex gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-sm text-gray-600">
                  Email Notifications
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm text-gray-600">SMS Notifications</span>
              </label>
            </div>
          </div>

          <div className="col-span-2 flex justify-end gap-4 mt-6">
            <button
              type="button"
              className="px-6 py-2 border border-gray-300 rounded text-gray-500 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="button"
              className="px-6 py-2 bg-[#152259] text-white rounded hover:bg-blue-900"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
