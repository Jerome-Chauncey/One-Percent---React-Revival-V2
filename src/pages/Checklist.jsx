// src/pages/Checklist.jsx
import React, { useState, useEffect } from "react";
import BrokerForm from "../components/BrokerForm";
import ResponseTable from "../components/ResponseTable";

const Checklist = () => {
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    fetch("https://onepercentrevivalv2-database.onrender.com/Responses")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch responses");
        return res.json();
      })
      .then((data) => setResponses(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

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

    fetch("https://onepercentrevivalv2-database.onrender.com/Responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(normalized),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to submit response");
        return res.json();
      })
      .then((savedResponse) => {
        setResponses((prev) => [...prev, savedResponse]);
      })
      .catch((err) => console.error("Submit Error", err))

    // console.log("Form submitted:", formData);
    // setResponses((prevResponses) => [...prevResponses, normalized]);
  };
  return (
    <div className="container-fluid my-5 ">
      <div className="row">
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
