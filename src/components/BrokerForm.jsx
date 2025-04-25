import React, { useState, useEffect } from "react";

export default function BrokerForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    brokerName: "",
    tradingConditions: "",
    regulatoryStatus: "",
    traderReviews: "",
    understandRisks: "",
    realisticReturns: "",
    withdrawalPolicies: "",
    customerSupport: "",
    hiddenFees: "",
    riskManagement: "",
  });

  const [brokers, setBrokers] = useState([]);

  useEffect(() => {
    const url = "https://onepercentrevivalv2-database-brokers.onrender.com/brokers";
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setBrokers(data); 
      })
      .catch((error) => console.error("Error fetching broker data:", error));
  }, []);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onSubmit(formData);
    setFormData({
      brokerName: "",
      tradingConditions: "",
      regulatoryStatus: "",
      traderReviews: "",
      understandRisks: "",
      realisticReturns: "",
      withdrawalPolicies: "",
      customerSupport: "",
      hiddenFees: "",
      riskManagement: "",
    });
  };

  return (
    <div className="card shadow-sm p-3 mb-4 bg-body rounded" style={{ width: "100%" }}>
      <h2>Broker Review Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="brokerName">
            Broker Name
          </label>

          <div className="col-md-5">
            <select
              name="brokerName"
              value={formData.brokerName}
              onChange={handleChange}
              className="form-control"
              required
            >
              <option value="">Select a broker</option>
              {brokers.map((broker) => (
                <option key={broker.id} value={broker.name}>
                  {broker.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="tradingConditions">
            1. Are the trading conditions transparent?
          </label>
          <div>
            <input
              type="radio"
              id="TransparentYes"
              name="tradingConditions"
              value={"YES"}
              checked={formData.tradingConditions === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="TransparentYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="TransparentNo"
              name="tradingConditions"
              value={"NO"}
              checked={formData.tradingConditions === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="TransparentNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="regulatoryStatus">
            2. Have you verified the broker's regulatory status?
          </label>
          <div>
            <input
              type="radio"
              id="regulatoryStatusYes"
              name="regulatoryStatus"
              value={"YES"}
              checked={formData.regulatoryStatus === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="regulatoryStatusYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="regulatoryStatusNo"
              name="regulatoryStatus"
              value={"NO"}
              checked={formData.regulatoryStatus === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="regulatoryStatusNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="traderReviews">
            3. Have you read independent trader reviews?
          </label>
          <div>
            <input
              type="radio"
              id="readTraderReviewsYes"
              name="traderReviews"
              value={"YES"}
              checked={formData.traderReviews === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="readTraderReviewsYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="readTraderReviewsNo"
              name="traderReviews"
              value={"NO"}
              checked={formData.traderReviews === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="readTraderReviewsNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="understandRisks">
            4. Do you understand the risks associated with this market?
          </label>
          <div>
            <input
              type="radio"
              id="understandRisksYes"
              name="understandRisks"
              value={"YES"}
              checked={formData.understandRisks === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="understandRisksYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="understandRisksNo"
              name="understandRisks"
              value={"NO"}
              checked={formData.understandRisks === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="understandRisksNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="realisticReturns">
            5. Is the broker offering realistic returns, or do they seem too good
            to be true?
          </label>
          <div>
            <input
              type="radio"
              id="realisticReturnsYes"
              name="realisticReturns"
              value={"YES"}
              checked={formData.realisticReturns === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="realisticReturnsYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="realisticReturnsNo"
              name="realisticReturns"
              value={"NO"}
              checked={formData.realisticReturns === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="realisticReturnsNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="withdrawalPolicies">
            6. Have you checked the broker's withdrawal policies?
          </label>
          <div>
            <input
              type="radio"
              id="checkeckedWithdrawalPoliciesYes"
              name="withdrawalPolicies"
              value={"YES"}
              checked={formData.withdrawalPolicies === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="checkeckedWithdrawalPoliciesYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="checkeckedWithdrawalPoliciesNo"
              name="withdrawalPolicies"
              value={"NO"}
              checked={formData.withdrawalPolicies === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="checkeckedWithdrawalPoliciesNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="customerSupport">
            7. Does the broker provide proper customer support and dispute
            resolution?
          </label>
          <div>
            <input
              type="radio"
              id="properCustomerSupportYes"
              name="customerSupport"
              value={"YES"}
              checked={formData.customerSupport === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="properCustomerSupportYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="properCustomerSupportNo"
              name="customerSupport"
              value={"NO"}
              checked={formData.customerSupport === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="properCustomerSupportNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="hiddenFees">
            8. Are there any hidden fees or unclear commission structures?
          </label>
          <div>
            <input
              type="radio"
              id="HiddenFeesYes"
              name="hiddenFees"
              value={"YES"}
              checked={formData.hiddenFees === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="HiddenFeesYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="HiddenFeesNo"
              name="hiddenFees"
              value={"NO"}
              checked={formData.hiddenFees === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="HiddenFeesNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="riskManagement">
            9. Does the platform have proper risk management tools?
          </label>
          <div>
            <input
              type="radio"
              id="riskManagementYes"
              name="riskManagement"
              value={"YES"}
              checked={formData.riskManagement === "YES"}
              onChange={handleChange}
            />
            <label htmlFor="riskManagementYes" className="mx-2">
              Yes
            </label>
            <input
              type="radio"
              id="riskManagementNo"
              name="riskManagement"
              value={"NO"}
              checked={formData.riskManagement === "NO"}
              onChange={handleChange}
            />
            <label htmlFor="riskManagementNo" className="mx-2">
              No
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
