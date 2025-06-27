import React from "react";
import Sidebar from "../components/Sidebar";

export default function UnderReview() {
  return (
    <div style={{ display: "flex", height: "100vh", backgroundColor: "#fff" }}>
      <Sidebar />

      <div
        style={{
          marginLeft: "240px",
          width: "calc(100% - 240px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          textAlign: "center"
        }}
      >
        <img
          src="/review.png" // make sure this image matches the one you uploaded
          alt="Under Review"
          style={{ width: "300px", marginBottom: "2rem" }}
        />
        <h2 style={{ fontSize: "1.8rem", fontWeight: "600", color: "#222" }}>
          Your Application is under Review
        </h2>
        <p style={{ fontSize: "1rem", color: "#777", maxWidth: "400px" }}>
          Chirag Connect will now review your application. Expect your account to be ready within 12 hours.
        </p>
      </div>
    </div>
  );
}
