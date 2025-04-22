// src/pages/Checklist.jsx
import React from "react";
import BrokerForm from "../components/BrokerForm";

const Checklist = () => {
  const handleFormSubmit = (formData) => {
    
    console.log("Form submitted:", formData);
  }
  return (
    <div>
      <BrokerForm onSubmit={handleFormSubmit}/>
    </div>
  );
};

export default Checklist;
