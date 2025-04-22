// src/pages/Checklist.jsx
import React, { useState } from "react";
import BrokerForm from "../components/BrokerForm";
import ResponseTable from "../components/ResponseTable";

const Checklist = () => {
  const [responses, setResponses] = useState([]);
  const handleFormSubmit = (formData) => {
    const normalized = {
      brokerName: formData.brokerName, 
      tradingConditionsTransparent: formData.tradingConditions,
      regulatoryStatusVerified: formData.regulatoryStatus,
      reviewsRead: formData.traderReviews,
      risksUnderstood: formData.understandRisks,
      realisticReturns: formData.realisticReturns,
      withdrawalPoliciesChecked: formData.withdrawalPolicies,
      customerSupportVerified: formData.customerSupport,
      hiddenFees: formData.hiddenFees,
      riskManagementTools: formData.riskManagement,
    };

    console.log("Form submitted:", formData);
    setResponses((prevResponses) => [...prevResponses, normalized]);
  };
  return (
    <div className="container-fluid my-5 ">
      <div
          className="row"
      >
        <div className="col-12 col-md-4 mb-4">
          <BrokerForm onSubmit={handleFormSubmit} />
        </div>

        <div className="col-12 col-md-8"> 
          <ResponseTable responses={responses} />
        </div>
      </div>
    </div>
  );
};

export default Checklist;
