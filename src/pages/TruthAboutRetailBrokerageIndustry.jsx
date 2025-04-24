import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 
import BrokerEducation from "../components/BrokerEducation";

const ProtectedPage = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logout(); 
    navigate("/login"); 
  };

  return (
    <div>
      <BrokerEducation/>
    </div>
  );
};



export default ProtectedPage;
