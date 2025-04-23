import React from "react";

const getBadge = (value) => {
  if (value === "YES") return "🟢";
  if (value === "NO") return "🔴";
    return "⚪️";
};

const calculateScore = (response) => {
  const positiveKeys = [
    "tradingConditionsTransparent",
    "regulatoryStatusVerified",
    "reviewsRead",
    "risksUnderstood",
    "realisticReturns",
    "withdrawalPoliciesChecked",
    "customerSupportVerified",

    "riskManagementTools",
  ];
  const negativeKeys = ["hiddenFees"];

  let score = 0;
  const totalQuestions = positiveKeys.length + negativeKeys.length;

  positiveKeys.forEach((key) => {
    if (response[key] === "YES") score += 1;
  });

  negativeKeys.forEach((key) => {
    if (response[key] === "NO") score += 1;
  });

  const percentage = (score / totalQuestions) * 100;
  if (percentage >= 80) return "🟢 Low Risk";
  if (percentage >= 50) return "🟡 Medium Risk";
  return "🔴 High Risk";
};

const ResponseTable = ({ responses }) => {
  return (
    <div style={{width: "100%"}}>
      <h2>Submitted Broker Reviews</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-hover" style={{width: "100%"}}>
          <thead className="table-light">
            <tr>
              <th>Broker</th>
              <th>Conditions</th>
              <th>Regulation</th>
              <th>Reviews Read</th>
              <th>Understood Risks</th>
              <th>Realistic Returns</th>
              <th>Withdrawal Policies</th>
              <th>Customer Support</th>
              <th>Hidden Fees</th>
              <th>Risk Management</th>
              <th>Overall</th>
            </tr>
          </thead>
          <tbody>
            {responses.map((response, index) => (
              <tr key={index}>
                <td>{response.brokerName}</td>
                <td>{getBadge(response.tradingConditionsTransparent)}</td>
                <td>{getBadge(response.regulatoryStatusVerified)}</td>
                <td>{getBadge(response.reviewsRead)}</td>
                <td>{getBadge(response.risksUnderstood)}</td>
                <td>{getBadge(response.realisticReturns)}</td>
                <td>{getBadge(response.withdrawalPoliciesChecked)}</td>
                <td>{getBadge(response.customerSupportVerified)}</td>
                <td>{getBadge(response.hiddenFees)}</td>
                <td>{getBadge(response.riskManagementTools)}</td>
                <td>{calculateScore(response)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResponseTable;
