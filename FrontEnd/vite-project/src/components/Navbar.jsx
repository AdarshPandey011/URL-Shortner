// src/components/Navbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();             // Clear token from context + localStorage
    navigate("/login");   // Redirect to login page
  };

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "32px 64px 0 64px",
      background: "transparent"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <span style={{
          fontSize: 28,
          fontWeight: 700,
          color: "#3b82f6",
          marginRight: 10
        }}>🔗</span>
        <span style={{
          fontSize: 24,
          fontWeight: 700,
          color: "#6a5af9"
        }}>LinkShort</span>
      </div>
      <div>
        <a href="/" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Home</a>
        <a href="#" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Features</a>
        <a href="#" style={{ margin: "0 20px", color: "#6a5af9", fontWeight: 500, textDecoration: "none" }}>Pricing</a>
        {isAuthenticated && (
          <button onClick={handleLogout} style={{
            marginLeft: 30,
            padding: "8px 16px",
            background: "#ef4444",
            color: "#fff",
            border: "none",
            borderRadius: "50px",
            fontWeight: 700,
            cursor: "pointer"
          }}>
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
