import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 

const ProtectedPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div>
      <h2>Protected Page</h2>
      <p>This is a protected page that only logged-in users can access.</p>
    </div>
  );
};

export default ProtectedPage;
