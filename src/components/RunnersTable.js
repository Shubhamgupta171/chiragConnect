import React from "react";
import { ChevronRight, Eye, MessageCircle, X } from "lucide-react";

const RunnersTable = () => {
  const runners = [
    {
      name: "Jacob Jones",
      contact: "+91 123 456 7890",
      status: "Active",
      image: "/u1.jpg",
    },
    {
      name: "Darrell Steward",
      contact: "+91 123 456 7890",
      status: "Inactive",
      image: "/u2.jpg",
    },
    {
      name: "Esther Howard",
      contact: "+91 123 456 7890",
      status: "Active",
      image: "/u3.jpg",
    },
    {
      name: "Arlene McCoy",
      contact: "+91 123 456 7890",
      status: "Active",
      image: "/u4.jpg",
    },
    {
      name: "Jane Cooper",
      contact: "+91 123 456 7890",
      status: "Active",
      image: "/u5.jpg",
    },
    {
      name: "Ralph Edwards",
      contact: "+91 123 456 7890",
      status: "Active",
      image: "/u6.jpg",
    },
  ];

  return (
    <div style={styles.wrapper}>
      <div style={styles.header}>
        <h2 style={styles.title}>My Runners</h2>
        <button style={styles.viewAllBtn}>
          View all <ChevronRight size={10} style={{ marginLeft: 2 }} />
        </button>
      </div>

      <div style={styles.tableCard}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Runner Name</th>
              <th style={styles.th}>Runner Contact</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>View</th>
            </tr>
          </thead>
          <tbody>
            {runners.map((runner, index) => (
              <tr key={index}>
                <td style={styles.tdName}>
                  <img
                    src={runner.image}
                    alt={runner.name}
                    style={styles.avatarImage}
                  />
                  <span>{runner.name}</span>
                </td>
                <td style={styles.td}>{runner.contact}</td>
                <td style={styles.td}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor:
                        runner.status === "Active" ? "#D1FAE5" : "#E5E7EB",
                      color:
                        runner.status === "Active" ? "#065F46" : "#4B5563",
                    }}
                  >
                    {runner.status}
                  </span>
                </td>
                <td style={styles.td}>
                  <div style={styles.actions}>
                    <button
                      style={{
                        ...styles.actionBtn,
                        borderColor: "#BFDBFE",
                        backgroundColor: "#EFF6FF",
                      }}
                    >
                      <Eye size={20} color="#3B82F6" />
                    </button>
                    <button
                      style={{
                        ...styles.actionBtn,
                        borderColor: "#BBF7D0",
                        backgroundColor: "#ECFDF5",
                      }}
                    >
                      <MessageCircle size={18} color="#10B981" />
                    </button>
                    <button
                      style={{
                        ...styles.actionBtn,
                        borderColor: "#FECACA",
                        backgroundColor: "#FEF2F2",
                      }}
                    >
                      <X size={18} color="#EF4444" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    marginBottom: "24px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#111827",
  },
  viewAllBtn: {
    display: "flex",
    alignItems: "center",
    background: "none",
    border: "none",
    color: "#2563EB",
    fontSize: "12px",
    fontWeight: "500",
    cursor: "pointer",
    padding: 0,
  },
  tableCard: {
    backgroundColor: "#ffffff",
    borderRadius: "6px",
    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
    overflowX: "auto",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "13px",
    color: "#374151",
    minWidth: "600px",
  },
  th: {
    backgroundColor: "#F3F4F6",
    textAlign: "left",
    padding: "10px 16px",
    fontWeight: "600",
    color: "#6B7280",
    fontSize: "11px",
    textTransform: "uppercase",
    borderBottom: "1px solid #E5E7EB",
  },
  td: {
    padding: "10px 16px",
    borderBottom: "1px solid #E5E7EB",
    color: "#374151",
    fontSize: "13px",
  },
  tdName: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 16px",
    borderBottom: "1px solid #E5E7EB",
    fontWeight: "500",
    color: "#111827",
    fontSize: "13px",
  },
  avatarImage: {
    width: "28px",
    height: "28px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  statusBadge: {
    padding: "2px 8px",
    borderRadius: "9999px",
    fontSize: "11px",
    fontWeight: "500",
  },
  actions: {
    display: "flex",
    gap: "8px",
  },
  actionBtn: {
    width: "28px",
    height: "28px",
    border: "1px solid",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#fff",
    cursor: "pointer",
    padding: 0,
  },
};

export default RunnersTable;
