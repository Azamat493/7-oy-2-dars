import React, { useState } from "react";
import { useSchool } from "../context/SchoolContext";
import { useNavigate } from "react-router-dom";
import Ellipse6 from "../assets/images/Ellipse6.png";
const Login = () => {
  const [email, setEmail] = useState("admin@school.com");
  const [password, setPassword] = useState("123");
  const [loading, setLoading] = useState(false);

  const { login } = useSchool();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const success = login(email, password);
      if (success) {
        navigate("/");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4FF]">
      <div className="bg-white p-2 rounded-2xl shadow-xl flex max-w-4xl w-full overflow-hidden">
        <div className="w-1/2 bg-[#152259] hidden md:flex flex-col items-center justify-center p-12 text-white rounded-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

          <div className="z-10 text-center">
            <img src={Ellipse6} alt="" className="mx-auto"/>
            <h2 className="text-3xl font-bold mb-4">Welcome to Udemy School</h2>
            <p className="text-blue-200 text-sm leading-relaxed">
              Manage your students, teachers, and exams in one place. The most
              powerful dashboard for modern education.
            </p>
          </div>

          <div className="mt-12 z-10 text-xs text-blue-300">
            v1.0.0 School Management System
          </div>
        </div>

        <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-[#4F4F4F] mb-2">Sign In</h2>
          <p className="text-gray-400 mb-8 text-sm">
            Enter your email and password to access admin panel.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-[#509CDB] focus:ring-2 focus:ring-blue-100 transition"
                placeholder="admin@school.com"
              />
            </div>
            <div>
              <label className="block text-gray-600 text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-3 text-sm outline-none focus:border-[#509CDB] focus:ring-2 focus:ring-blue-100 transition"
                placeholder="123"
              />
            </div>

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="rounded text-blue-600" />
                <span className="text-gray-500">Remember me</span>
              </label>
              <a
                href="#"
                className="text-[#509CDB] font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full bg-[#509CDB] text-white py-3 rounded-lg font-bold shadow-lg hover:bg-blue-600 transition flex items-center justify-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Sign In"
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-400">
            Don't have an account?{" "}
            <span className="text-[#509CDB] font-bold cursor-pointer">
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
