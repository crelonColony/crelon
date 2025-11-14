import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutUser = async () => {
      const token = localStorage.getItem("token");

      try {
        // Optional: Inform backend (if you added a /logout route)
        await axios.post(
          "http://localhost:5000/api/auth/logout",
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.error("Logout error:", err.response?.data || err.message);
      }

      // ✅ Clear all local storage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      localStorage.removeItem("email");


       sessionStorage.clear();

    // Prevent back navigation
        window.history.pushState(null, null, window.location.href);
        window.onpopstate = function () {
        window.history.go(1);
        };
      // ✅ Redirect to login page
      navigate("/login");
    };

    logoutUser();
  }, [navigate]);

  return (
    <div className="logout-page">
      <div className="logout-message">
        <h2>Logging out...</h2>
      </div>
    </div>
  );
}
