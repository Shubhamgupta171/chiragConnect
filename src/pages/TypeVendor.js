import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function RegistrationPage() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeSection="registration" />

      <div style={{ backgroundColor: "white", padding: "2rem", flex: 1, marginLeft: 200 }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: "600", marginBottom: "1rem" }}>
          Registration
        </h2>

        <div
  style={{
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "0.5rem"
  }}
>
  {/* Card 1 */}
  <div style={{ textAlign: "center" }}>
    <div
      onClick={() => navigate("/register/service-vendor")}
      style={cardStyle}
      onMouseOver={e => (e.currentTarget.style.boxShadow = hoverShadow)}
      onMouseOut={e => (e.currentTarget.style.boxShadow = defaultShadow)}
    >
      <img src="/service.png" alt="Service Vendor" style={imageStyle} />
      <h3 style={titleStyle}>Service Vendor</h3>
    </div>
    <p style={captionStyle}>Register as Service Vendor</p>
  </div>

  {/* Card 2 */}
  <div style={{ textAlign: "center" }}>
    <div
      onClick={() => navigate("/register/seller-vendor")}
      style={cardStyle}
      onMouseOver={e => (e.currentTarget.style.boxShadow = hoverShadow)}
      onMouseOut={e => (e.currentTarget.style.boxShadow = defaultShadow)}
    >
      <img src="/seller.png" alt="Seller Vendor" style={imageStyle} />
      <h3 style={titleStyle}>Seller Vendor</h3>
    </div>
    <p style={captionStyle}>Register as Vendor Seller</p>
  </div>

  {/* Card 3 */}
  <div style={{ textAlign: "center" }}>
    <div
      onClick={() => navigate("/register/delivery-partner")}
      style={cardStyle}
      onMouseOver={e => (e.currentTarget.style.boxShadow = hoverShadow)}
      onMouseOut={e => (e.currentTarget.style.boxShadow = defaultShadow)}
    >
      <img src="/delivery.png" alt="Delivery Partners" style={imageStyle} />
      <h3 style={titleStyle}>Delivery Partners</h3>
    </div>
    <p style={captionStyle}>Register as Delivery Partners</p>
  </div>
</div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/ab.png"
            alt="Farm Illustration"
            style={{  width: "668px", height: "300" }}
          />
        </div>
      </div>
    </div>
  );
}

const captionStyle = {
  marginTop: "0.5rem",
  fontSize: "0.95rem",
  color: "#333"
};


// 🔧 Reusable styles
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "0.75rem",
  padding: "1.5rem",
  textAlign: "center",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  cursor: "pointer",
  width: "250px",
  transition: "box-shadow 0.2s ease-in-out",
  backgroundColor: "#fff"
};

const imageStyle = {
  width: "80px",
  height: "80px",
  objectFit: "contain",
  marginBottom: "0.75rem"
};

const titleStyle = {
  fontSize: "1.25rem",
  fontWeight: "500",
  marginBottom: "0.25rem"
};

const defaultShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
const hoverShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
