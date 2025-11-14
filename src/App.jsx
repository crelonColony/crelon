import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./Component/ProtectedRoute";
import Navbar from "./Component/Navbar";
import DashboardNavbar from "./Component/DashboardNavbar";
import AdminNavbar from "./Component/AdminNavbar";
import Footer from "./Component/Footer";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import StudentDashboard from "./Pages/StudentDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import MentorDashboard from "./Pages/MentorDashboard";
import MemberDashboard from "./Pages/MemberDashboard";
import Profile from "./Component/Profile";
import Community from "./Pages/Community";
import Info from "./Pages/Info";
import Program from "./Pages/Program";
import CreateUser from "./Component/CreateUser";
import AdminEvents from "./Component/AdminEvent";
import StudentEvent from "./Component/StudetnEvent";
import DashboardLayout from "./Component/DashboardLayout";
import StudentInternships from "./Component/StudentInternship";
import AdminInternships from "./Component/AdminInternship";
import Opportunity from "./Pages/Opportunity";
import StudentWorkshops from "./Component/StudentWorkshops";
import AdminWorkshops from "./Component/AdminWorkshops";
import StudentMyInternships from "./Component/StudentMyInternship";
import StudentSessions from "./Component/StudentSession";
import AdminSessions from "./Component/AdminSession";
import MentorSessions from "./Component/MentorSession";
import StudentPortfolioForm from "./Component/StudentPortfolioForm";
import PublicPortfolio from "./Component/PublicPortfolio";
import StudentWeeklyReport from "./Component/StudentWeeklyReport";
import AdminReports from "./Component/AdminReport";
import StudentSettings from "./Component/StudentSetting";
import AdminProfile from "./Component/AdminProfile"
import Logout from "./Component/LogOut";
import TestingCard from "./Component/TestingCard";

import HeroSection3 from "./Component/HeroSection3"

// ✅ Layout that switches navbars based on route
function Layout({ children }) {
  const location = useLocation();

  // Define route patterns
  const dashboardRoutes = ["/student", "/mentor", "/member", "/profile"];
  const adminRoutes = ["/admin", "/admin/profile", "/createuser"];
  const hideAllNavbarRoutes = ["/login", "/signup"];

  // Determine which layout to show
  const isDashboard = dashboardRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  const isAdmin = adminRoutes.some((path) =>
    location.pathname.startsWith(path)
  );
  const hideAll = hideAllNavbarRoutes.includes(location.pathname);

  return (
    <>
      {/* Navbar selection */}
      {!hideAll && (
        isAdmin ? (
          <AdminNavbar />
        ) : isDashboard ? (
          <DashboardNavbar />
        ) : (
          <Navbar />
        )
      )}

      {/* Page Content */}
      {children}

      {/* Footer only on main site pages */}
      {!hideAll && !isDashboard && !isAdmin && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<Info />} />
            <Route path="/community" element={<Community />} />
            <Route path="/programs" element={<Program />} />
            <Route path="/oppotunity" element={<Opportunity />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/adminevent" element={<AdminEvents />} />
            <Route path="/studentevent" element={<StudentEvent />} />
            <Route path="/studentinternship" element={<StudentInternships />} />
            <Route path="/admininternship" element={<AdminInternships />} />
            <Route path="/adminworkshop" element={<AdminWorkshops />} />
            <Route path="/studentworkshop" element={<StudentWorkshops />} />
            <Route path="/student/my-internships" element={<StudentMyInternships />} />
            <Route path="/student/sessions" element={<StudentSessions />} />
            <Route path="/admin/sessions" element={<AdminSessions />} />
            <Route path="/mentor/sessions" element={<MentorSessions />} />
            <Route path="/student/portfolio" element={<StudentPortfolioForm />} />
            <Route path="/portfolio/:username" element={<PublicPortfolio />} />
            <Route path="/student/weekly-report" element={<StudentWeeklyReport />} />
            <Route path="/admin/weekly-report" element={<AdminReports />} />
            <Route path="/student/setting" element={<StudentSettings />} />
            <Route path="/admin" element={<AdminDashboard/>}/>
            <Route path="/admin/profile" element={<AdminProfile/>}/>
            <Route path="/logout" element={<Logout />} />
            <Route path="/test" element={<TestingCard />} />
            

            {/* Protected Dashboards */}
            <Route
              path="/student"
              element={
                <ProtectedRoute allowedRoles={["student"]}>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/mentor"
              element={
                <ProtectedRoute allowedRoles={["mentor"]}>
                  <MentorDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/member"
              element={
                <ProtectedRoute allowedRoles={["member"]}>
                  <MemberDashboard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;
