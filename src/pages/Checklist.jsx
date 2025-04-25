import React, { useState, useEffect } from "react";
import BrokerForm from "../components/BrokerForm";
import ResponseTable from "../components/ResponseTable";

const Checklist = () => {
  const [responses, setResponses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = () => {
    setIsLoading(true);
    fetch("https://onepercentrevivalv2-database.onrender.com/Responses")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch responses");
        return res.json();
      })
      .then((data) => {
        setResponses(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError(err.message);
        setIsLoading(false);
      });
  };

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
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
      })
      .catch((err) => console.error("Submit Error", err));
  };

  return (
    <div className="main-container">
      {showNotification && (
        <div className="notification">Review submitted successfully</div>
      )}

      <div className="container-fluid py-4">
        <div className="row">
          <div className="col-12 mb-4">
            <h2 className="page-title">Broker Review Dashboard</h2>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <div className="card form-card">
              <div className="card-body">
                <h3 className="card-title mb-4">Submit Review</h3>
                <BrokerForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-8">
            <div className="card table-card">
              <div className="card-body">
                <h3 className="card-title mb-4">Review History</h3>
                {isLoading ? (
                  <div className="text-center py-4">
                    <div className="spinner"></div>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <ResponseTable responses={responses} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .main-container {
          background-color: #0a1929;
          min-height: 100vh;
          position: relative;
          color: #e0e7ff; /* Light text color for better readability */
        }

        .page-title {
          color: #3db9ff;
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.5px;
          text-shadow: 0 0 20px rgba(61, 185, 255, 0.3);
        }

        .card {
          background-color: #1a2b3d;
          border: 1px solid rgba(61, 185, 255, 0.2);
          border-radius: 8px;
          transition: box-shadow 0.3s ease;
        }

        .card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .card-title {
          color: #3db9ff;
          font-size: 1.4rem;
          font-weight: 600;
          letter-spacing: 0.3px;
        }

        .card-body {
          color: #e0e7ff;
        }

        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #2e7d32;
          color: white;
          padding: 12px 24px;
          border-radius: 4px;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          font-weight: 500;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(61, 185, 255, 0.1);
          border-radius: 50%;
          border-top-color: #3db9ff;
          animation: spin 1s linear infinite;
          margin: 0 auto;
        }

        /* Form Styles */
        .form-control,
        .form-select {
          background-color: #0a1929;
          border: 1px solid rgba(61, 185, 255, 0.2);
          color: #e0e7ff;
          transition: border-color 0.2s ease;
          font-size: 1rem;
        }

        .form-control:focus,
        .form-select:focus {
          background-color: #0a1929;
          border-color: #3db9ff;
          color: #e0e7ff;
          box-shadow: 0 0 0 2px rgba(61, 185, 255, 0.2);
        }

        .form-label {
          color: #e0e7ff;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        /* Table Styles */
        .table {
          color: #e0e7ff;
        }

        .table thead th {
          background-color: rgba(61, 185, 255, 0.1);
          border-bottom: 2px solid rgba(61, 185, 255, 0.2);
          color: #3db9ff;
          font-weight: 600;
          padding: 1rem;
        }

        .table td {
          border-color: rgba(61, 185, 255, 0.1);
          padding: 1rem;
          vertical-align: middle;
        }

        .table tbody tr {
          transition: background-color 0.2s ease;
        }

        .table tbody tr:hover {
          background-color: rgba(61, 185, 255, 0.05);
        }

        /* Button Styles */
        .btn {
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: all 0.2s ease;
        }

        .btn-primary {
          background-color: #3db9ff;
          border-color: #3db9ff;
        }

        .btn-primary:hover {
          background-color: #2ea8ee;
          border-color: #2ea8ee;
        }

        /* Alert Styles */
        .alert-danger {
          background-color: rgba(220, 53, 69, 0.1);
          border-color: rgba(220, 53, 69, 0.2);
          color: #ff6b6b;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 992px) {
          .card {
            margin-bottom: 1rem;
          }

          .page-title {
            font-size: 1.75rem;
          }

          .card-title {
            font-size: 1.25rem;
          }
        }

        /* Placeholder text color */
        ::placeholder {
          color: rgba(224, 231, 255, 0.5);
        }

        /* Selection color */
        ::selection {
          background: rgba(61, 185, 255, 0.2);
          color: #e0e7ff;
        }
      `}</style>
    </div>
  );
};

export default Checklist;
