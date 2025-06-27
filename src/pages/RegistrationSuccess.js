import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function RegistrationSuccess() {
  const navigate = useNavigate();

  // Auto-redirect to "/under-review" after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/under-review");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
      <Sidebar />

      {/* Main content container shifted right to align with sidebar */}
      <div
        style={{
          marginLeft: "240px", // Matches Sidebar width
          width: "calc(100% - 240px)", // Remaining space
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* Image Section */}
        <div
          style={{
            flex: 1,
            backgroundColor: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            padding: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "80vh",
            marginRight: "4rem",
            marginLeft: "-4rem",
          }}
        >
          <img
            src="/sellerV.jpg"
            alt="Success"
            style={{
              maxWidth: "650px",
              maxHeight: "600px",
              borderRadius: "1rem",
            }}
          />
        </div>

        {/* Text Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <img src="/check.png" alt="Check" style={{ width: "130px" }} />
          <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#222" }}>
            Successful
          </h2>
          <p style={{ fontSize: "1rem", color: "#666", textAlign: "center" }}>
            You have successfully Registered into your account.
          </p>
          <p style={{ fontSize: "0.9rem", color: "#aaa", textAlign: "center" }}>
            Redirecting to review page...
          </p>
        </div>
      </div>
    </div>
  );
}
