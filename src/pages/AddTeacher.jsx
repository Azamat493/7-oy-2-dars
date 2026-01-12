import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSchool } from "../context/SchoolContext";
import { CiBellOn } from "react-icons/ci";

const AddTeacher = () => {
  const navigate = useNavigate();
  const { addTeacher } = useSchool();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    class: "",
    gender: "",
    age: "",
    about: "",
    img: null,
  });

  const [previewImg, setPreviewImg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
 
        setPreviewImg(reader.result);
        setFormData({ ...formData, img: reader.result });
      };
      reader.readAsDataURL(file); 
    }
  };


  const handleSave = () => {
    if (!formData.name || !formData.email) {
      alert("Ism va Email majburiy!");
      return;
    }

    const finalData = {
      ...formData,
   
      img:
        formData.img ||
        `https://ui-avatars.com/api/?name=${formData.name}&background=random`,
    };

    addTeacher(finalData);
    navigate("/teachers");
  };

  return (
    <div className="p-8 w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-[#4F4F4F]">Add teacher</h1>
        <div className="flex items-center gap-4">
          <CiBellOn className="text-2xl text-gray-500 cursor-pointer" />
          <button
            onClick={handleSave}
            className="bg-[#509CDB] text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition shadow-md"
          >
            Save
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-6">
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              Full Name
            </label>
            <input
              name="name"
              onChange={handleChange}
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              Email address
            </label>
            <input
              name="email"
              onChange={handleChange}
              type="email"
              placeholder="Email address"
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm"
            />
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              Subject
            </label>
            <select
              name="subject"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm bg-white"
            >
              <option value="">Select Subject</option>
              <option value="Maths">Maths</option>
              <option value="Chemistry">Chemistry</option>
              <option value="French">French</option>
              <option value="English">English</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              About
            </label>
            <textarea
              name="about"
              onChange={handleChange}
              placeholder="About"
              rows="6"
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm resize-none"
            ></textarea>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              Class
            </label>
            <select
              name="class"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm bg-white"
            >
              <option value="">Select Class</option>
              <option value="J SS 2">J SS 2</option>
              <option value="J SS 3">J SS 3</option>
              <option value="SS 3">SS 3</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm bg-white"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-500 text-sm mb-1.5 font-medium">
              Age
            </label>
            <input
              name="age"
              onChange={handleChange}
              type="number"
              placeholder="Age"
              className="w-full border border-gray-300 rounded p-3 outline-none text-sm"
            />
          </div>

          <div className="mt-8">
            <label className="block text-gray-500 font-medium mb-1.5 text-sm">
              Import Img
            </label>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              className="hidden"
              accept="image/*"
            />

            <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center text-gray-400 hover:bg-gray-50 cursor-pointer transition h-40 relative overflow-hidden bg-white"
            >
              {previewImg ? (
                <img
                  src={previewImg}
                  alt="Preview"
                  className="h-full object-contain"
                />
              ) : (
                <span className="text-sm">Click to upload image</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
