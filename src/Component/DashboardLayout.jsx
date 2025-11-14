// src/Pages/DashboardLayout.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import StudentSidebar from "../Component/DashboardNavbar";
import StudentDashboard from "../Pages/StudentDashboard";
import Profile from "../Component/Profile";
import "../Style/StudentSidebar.css";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="dashboard-container">
      <StudentSidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      <main className={`main-content ${isSidebarOpen ? "" : "collapsed"}`}>
        <Routes>
          <Route path="/" element={<StudentDashboard />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default DashboardLayout;
