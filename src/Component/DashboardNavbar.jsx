import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo-light-C.png";
import {
  Home,
  Briefcase,
  FileText,
  Settings,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  BookOpen,
  ClipboardList,
  User,
  LogOut,
} from "lucide-react";
import "../Style/StudentSidebar.css";

const StudentSidebar = ({ isOpen, setIsOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <aside className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
      {/* Top Section */}
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img src={logo} alt="Logo" className="logo" />
          {isOpen && <h2 className="sidebar-title">Student Dashboard</h2>}
        </div>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        {/* Home */}
        <Link to="/student" className="nav-link">
          <Home size={20} />
          {isOpen && <span>Home</span>}
        </Link>

        {/* Internship Tracker */}
        <div className="dropdown">
          <button
            className={`dropdown-btn ${
              activeDropdown === "internship" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("internship")}
          >
            <Briefcase size={20} />
            {isOpen && (
              <>
                <span>Internship Tracker</span>
                {activeDropdown === "internship" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </>
            )}
          </button>
          {activeDropdown === "internship" && isOpen && (
            <div className="dropdown-content">
              <Link to="/student/my-internships" className="submenu-link">
                <FileText size={16} />
                Current Internship
              </Link>
              <Link to="/student/weekly-report" className="submenu-link">
                <ClipboardList size={16} />
                Weekly Report
              </Link>
            </div>
          )}
        </div>

        {/* Explore */}
        <div className="dropdown">
          <button
            className={`dropdown-btn ${
              activeDropdown === "explore" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("explore")}
          >
            <Briefcase size={20} />
            {isOpen && (
              <>
                <span>Explore</span>
                {activeDropdown === "explore" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </>
            )}
          </button>
          {activeDropdown === "explore" && isOpen && (
            <div className="dropdown-content">
              <Link to="/studentevent" className="submenu-link">
                <User size={16} />
                Event
              </Link>
              <Link to="/studentinternship" className="submenu-link">
                <ClipboardList size={16} />
                Internship
              </Link>
              <Link to="/studentworkshop" className="submenu-link">
                <ClipboardList size={16} />
                Workshop
              </Link>
            </div>
          )}
        </div>

        {/* Consulting */}
        <div className="dropdown">
          <button
            className={`dropdown-btn ${
              activeDropdown === "consulting" ? "active" : ""
            }`}
            onClick={() => toggleDropdown("consulting")}
          >
            <BookOpen size={20} />
            {isOpen && (
              <>
                <span>Consulting</span>
                {activeDropdown === "consulting" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </>
            )}
          </button>
          {activeDropdown === "consulting" && isOpen && (
            <div className="dropdown-content">
              <Link to="/student/sessions" className="submenu-link">
                <FileText size={16} />
                Book Session
              </Link>
              <Link to="#" className="submenu-link">
                <ClipboardList size={16} />
                Check Session
              </Link>
            </div>
          )}
        </div>

        {/* Portfolio */}
        <Link to="/student/portfolio" className="nav-link">
          <User size={20} />
          {isOpen && <span>Portfolio</span>}
        </Link>

        {/* Profile */}
        <Link to="/profile" className="nav-link">
          <User size={20} />
          {isOpen && <span>Profile</span>}
        </Link>

        {/* Settings */}
        <Link to="/student/setting" className="nav-link">
          <Settings size={20} />
          {isOpen && <span>Settings</span>}
        </Link>

        <Link to="/logout" className="nav-link">
          <LogOut size={20} />
          {isOpen && <span>Logout</span>}
        </Link>
      </nav>
    </aside>
  );
};

export default StudentSidebar;
