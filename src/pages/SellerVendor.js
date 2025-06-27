import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function VendorSellerRegistration() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#fff", overflow: "hidden" }}>
      <Sidebar />

      <div style={{ padding: "1rem", marginLeft: "180px", width: "100%", overflowY: "auto" }}>
        <h2 style={{ fontSize: "1.3rem", marginLeft: "100px", fontWeight: "600", marginTop: "-2px" }}>
          Registration
        </h2>

        <div
          style={{
            display: "flex",
            marginTop: "10px",
            backgroundColor: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
            overflow: "hidden",
            padding: "1rem",
            justifyContent: "center",
            gap: "2rem",
            height: "calc(100vh - 90px)",
          }}
        >
          {/* Left Illustration */}
          <div style={{ width: "60%", textAlign: "center" }}>
            <img
              src="/sellerV.jpg"
              alt="Vendor Seller"
              style={{
                width: "100%",
                maxWidth: "550px",
                height: "520px",
                borderRadius: "1rem",
              }}
            />
            <p
              style={{
                marginTop: "0.5rem",
                fontSize: "1rem",
                fontWeight: "600",
                color: "#222",
              }}
            >
              CHIRAG Connects: Bridging Innovation and Agriculture for a Sustainable Future.
            </p>
          </div>

          {/* Right Form */}
          <div style={{ width: "30%", overflowY: "auto" }}>
            <h3
              style={{
                textAlign: "center",
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "0.5rem",
                marginTop: "-0.2rem",
              }}
            >
              Basic Details
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <input placeholder="Full Name" style={inputStyle} />
              <input placeholder="Address line 1" style={inputStyle} />
              <input placeholder="Address line 2" style={inputStyle} />

                <select style={inputStyle}>
                  <option value="">State</option>
                  <option>Maharashtra</option>
                  <option>Punjab</option>
                </select>
                <select style={inputStyle}>
                  <option value="">City</option>
                  <option>Nagpur</option>
                  <option>Ludhiana</option>
                </select>
             

              <select style={inputStyle}>
                <option value="">Select Product</option>
                <option>Seeds</option>
                <option>Fertilizers</option>
                <option>Equipment</option>
              </select>

              <input placeholder="License / Certificate / GST" style={inputStyle} />

              <UploadBlock label="Upload ID Proof" />
              <UploadBlock label="Upload Shop Images" />

              <label style={{ fontSize: "0.75rem" }}>Upload Aadhaar card*</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <UploadBlock />
                <UploadBlock />
              </div>

              <div style={{ fontSize: "0.7rem", color: "#00A86B", fontWeight: "500" }}>
                ✅ Aadhaar authentication Successful
              </div>

              <button style={buttonStyle} onClick={() => navigate("/dashboard")}>
                Save and Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// UploadBlock component
function UploadBlock({ label }) {
  return (
    <div style={{ width: "100%" }}>
      {label ? (
        <label
          style={{
            fontSize: "0.7rem",
            fontWeight: "500",
            marginBottom: "0.3rem",
            display: "block",
          }}
        >
          {label}
        </label>
      ) : (
        <div style={{ minHeight: "1rem" }}></div>
      )}
      <div
        style={{
          width: "60px",
          height: "60px",
          border: "2px dashed #ccc",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          fontSize: "1.2rem",
          backgroundColor: "#fafafa",
          cursor: "pointer",
        }}
      >
        +
      </div>
    </div>
  );
}

// Shared styles
const inputStyle = {
  padding: "0.4rem",
  borderRadius: "0.4rem",
  border: "1px solid #ccc",
  fontSize: "0.75rem",
  backgroundColor: "#fff",
  width: "100%",
  boxSizing: "border-box",
};

const buttonStyle = {
  marginTop: "0.5rem",
  backgroundColor: "#222",
  color: "#fff",
  padding: "0.6rem",
  borderRadius: "0.4rem",
  fontWeight: "500",
  fontSize: "0.85rem",
  cursor: "pointer",
  border: "none",
  width: "100%",
};
