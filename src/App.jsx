import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { SchoolProvider, useSchool } from "./context/SchoolContext";
import { Toaster } from "react-hot-toast";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Teachers from "./pages/Teachers";
import AddTeacher from "./pages/AddTeacher";
import TeacherDetails from "./pages/TeacherDetails";
import Students from "./pages/Students";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings";
import Exams from "./pages/Exams";
import Features from "./pages/Features";
import Login from "./pages/Login";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#F3F4FF]">
      <Sidebar />
      <div className="flex-1 ml-64 transition-all duration-300">{children}</div>
    </div>
  );
};

const ProtectedRoute = ({ children }) => {
  const { user } = useSchool();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Layout>{children}</Layout>;
};

const PublicRoute = ({ children }) => {
  const { user } = useSchool();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/teachers"
        element={
          <ProtectedRoute>
            <Teachers />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teachers/add"
        element={
          <ProtectedRoute>
            <AddTeacher />
          </ProtectedRoute>
        }
      />
      <Route
        path="/teachers/:id"
        element={
          <ProtectedRoute>
            <TeacherDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/students"
        element={
          <ProtectedRoute>
            <Students />
          </ProtectedRoute>
        }
      />

      <Route
        path="/billing"
        element={
          <ProtectedRoute>
            <Billing />
          </ProtectedRoute>
        }
      />

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />

      <Route
        path="/exams"
        element={
          <ProtectedRoute>
            <Exams />
          </ProtectedRoute>
        }
      />

      <Route
        path="/features"
        element={
          <ProtectedRoute>
            <Features />
          </ProtectedRoute>
        }
      />

      <Route
        path="*"
        element={
          <div className="flex h-screen items-center justify-center text-gray-500 text-lg">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <SchoolProvider>
      <Toaster position="top-right" toastOptions={{ duration: 3000 }} />
      <AppRoutes />
    </SchoolProvider>
  );
}

export default App;
