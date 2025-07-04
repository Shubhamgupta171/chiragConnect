import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function DroneServiceRegistration() {
  const navigate = useNavigate(); 

  const addDrone = () => {
    alert("Add more drone functionality coming soon!");
  };

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
            backgroundColor: "white",
            borderRadius: "1rem",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.06)",
            overflow: "hidden",
            padding: "1rem",
            justifyContent: "center",
            gap: "2rem",
            height: "calc(100vh - 90px)"
          }}
        >
          {/* Image Block */}
          <div style={{ width: "60%", textAlign: "center" }}>
            <img
              src="/sellerV.jpg"
              alt="Drone Service"
              style={{ width: "100%", maxWidth: "520px", height: "520px", borderRadius: "1rem" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "1.3rem", fontWeight: "600", color: "#222" }}>
              CHIRAG Connects: Bridging Innovation and Agriculture for a Sustainable Future.
            </p>
          </div>

          {/* Form Block */}
          <div style={{ width: "30%", overflowY: "auto" }}>
            <h3 style={{ textAlign: "center", fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem", marginTop: "-0.2rem" }}>
              Drone Service Details
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.7rem" }}>
              <input placeholder="Drone License Number" style={inputStyle} required />
              <input placeholder="UIN Number" style={inputStyle} />
              <input placeholder="Drone Model Name" style={inputStyle} />
              <input placeholder="Speed of the Drone" style={inputStyle} />
              <input placeholder="Flow Rate" style={inputStyle} />
              <input placeholder="Payload Capacity (kg)" style={inputStyle} />
              <input placeholder="Year of Purchase" style={inputStyle} />
              <input placeholder="Manufacturer Name" style={inputStyle} />

              <label style={{ fontSize: "0.75rem" }}>Upload Drone Image</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <UploadBlock />
              </div>

              <input placeholder="Battery Capacity (kg)" style={inputStyle} />
              <input placeholder="Battery Life Cycles" style={inputStyle} />
              <input placeholder="Battery Voltage" style={inputStyle} />

              <div
                onClick={addDrone}
                style={{
                  fontSize: "0.75rem",
                  color: "black",
                  fontWeight: "500",
                  textAlign: "center",
                  cursor: "pointer",
                  marginTop: "0.6rem",
                  marginBottom: "0.5rem"
                }}
              >
                + Add more Drone
              </div>

              <button style={buttonStyle} onClick={() => navigate("/registration-success")}>
                Save and Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UploadBlock() {
  return (
    <div style={{ width: "50px" }}>
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "2px dashed #ccc",
          borderRadius: "0.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#999",
          fontSize: "1.2rem",
          backgroundColor: "#fafafa",
          cursor: "pointer"
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
  boxSizing: "border-box"
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
  width: "100%"
};
