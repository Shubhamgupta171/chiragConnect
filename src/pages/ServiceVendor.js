import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function VendorServiceRegistration() {
  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState([]);

  const serviceTypes = [
    { label: "Drone Spraying", icon: "/spray.png" },
    { label: "Tractor Services", icon: "/tract.png" },
    { label: "Harvesting Machines", icon: "/harvest.png" },
    { label: "Soil Testing", icon: "/soil.png" },
    { label: "Power Weeder", icon: "/power.png" },
    { label: "Manual Sprayer", icon: "/manual.png" },
    { label: "Thresher / Winnower", icon: "/thresher.jpg" },
    { label: "Biofertilizer", icon: "/bio.png" },
    { label: "Seeding Supply", icon: "/seed.png" },
    { label: "Irrigation", icon: "/irrigation.png" },
    { label: "Custom Equipment", icon: "/custom.png" },
    { label: "Farm Labour", icon: "/farm.png" },
    { label: "Produce Collection & Transport", icon: "/pro.png" },
    { label: "Crop Advisory / Insurance", icon: "/crop.png" }
  ];

  const handleCheckboxChange = (label) => {
    setSelectedServices((prev) =>
      prev.includes(label)
        ? prev.filter((service) => service !== label)
        : [...prev, label]
    );
  };

  const handleNextStep = () => {
    if (selectedServices.includes("Drone Spraying")) {
      navigate("/drone-service-registration");
    } else {
      // Fallback for now — could navigate to other service-specific forms
      alert("Please select 'Drone Spraying' to continue to Drone Service Registration.");
    }
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
              alt="Farm Illustration"
              style={{ width: "100%", maxWidth: "520px", height: "520px", borderRadius: "1rem" }}
            />
            <p style={{ marginTop: "0.5rem", fontSize: "1rem", fontWeight: "600", color: "#222" }}>
              CHIRAG Connects: Bridging Innovation and Agriculture for a Sustainable Future.
            </p>
          </div>

          {/* Form Block */}
          <div style={{ width: "30%", overflowY: "auto" }}>
            <h3 style={{ textAlign: "center", fontSize: "1.3rem", fontWeight: "600", marginBottom: "0.5rem", marginTop: "-0.2rem" }}>
              Basic Details
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
              <input placeholder="Full name" required style={inputStyle} />
              <input placeholder="Address line 1" required style={inputStyle} />
              <input placeholder="Address line 2" style={inputStyle} />
              <select required style={inputStyle}>
                <option value="">State</option>
                <option>Maharashtra</option>
                <option>Punjab</option>
              </select>
              <select required style={inputStyle}>
                <option value="">City</option>
                <option>Nagpur</option>
                <option>Prayagraj</option>
              </select>

              <label style={{ fontSize: "0.75rem", fontWeight: "500" }}>Select Service types*</label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.4rem" }}>
                {serviceTypes.map((service, index) => (
                  <div key={index} style={serviceCardStyle}>
                    <input
                      type="checkbox"
                      checked={selectedServices.includes(service.label)}
                      onChange={() => handleCheckboxChange(service.label)}
                      style={{
                        position: "absolute",
                        top: "4px",
                        right: "4px",
                        width: "12px",
                        height: "12px"
                      }}
                    />
                    <img
                      src={service.icon}
                      alt={service.label}
                      style={{
                        width: "28px",
                        height: "24px",
                        objectFit: "contain",
                        marginBottom: "0.2rem"
                      }}
                    />
                    <span style={{ fontSize: "0.55rem", textAlign: "center" }}>
                      {service.label}
                    </span>
                  </div>
                ))}
              </div>

              <label style={{ fontSize: "0.75rem" }}>Upload Aadhaar card*</label>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <UploadBlock />
                <UploadBlock />
              </div>

              <div style={{ fontSize: "0.7rem", color: "#00A86B", fontWeight: "500" }}>
                ✅ Aadhaar authentication Successful
              </div>

              <button style={buttonStyle} onClick={handleNextStep}>
                Next Step
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

const serviceCardStyle = {
  position: "relative",
  width: "70px",
  height: "50px",
  backgroundColor: "white",
  border: "1px solid #ddd",
  borderRadius: "0.5rem",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "0.3rem"
};
