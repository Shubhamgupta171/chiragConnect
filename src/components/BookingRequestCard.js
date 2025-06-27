import React from "react";
import { Calendar } from "lucide-react";

const BookingRequestCard = ({ booking }) => {
  return (
    <div style={styles.card}>
      {/* Top Section */}
      <div style={styles.header}>
        <span style={styles.bookingId}>{booking.id}</span>
        <div style={styles.detailsSection}>
          <div style={styles.detailRow}>
            <div style={styles.bullet}></div>
            <span>{booking.location}</span>
          </div>
          <div style={styles.detailRow}>
            <Calendar size={12} style={{ marginRight: 6 }} />
            <span>{booking.date} | {booking.time}</span>
          </div>
        </div>
      </div>

      {/* Info Grid */}
      <div style={styles.gridRow}>
        <div>
          <span style={styles.label}>Booking Name:</span>
          <div style={styles.value}>{booking.name}</div>
        </div>
        <div>
          <span style={styles.label}>Contact number:</span>
          <div style={styles.value}>{booking.contact}</div>
        </div>
        <div>
          <span style={styles.label}>Farm Area:</span>
          <div style={styles.value}>{booking.price}</div>
        </div>
        <div>
          <span style={styles.label}>Crop:</span>
          <div style={styles.value}>{booking.crop}</div>
        </div>
      </div>

      {/* Weather */}
      <div style={styles.observationRow}>
        <span style={styles.temperature}>{booking.temperature}</span>
        <span style={styles.observation}>Weather Summary</span>
          <div style={styles.humidity}>{booking.humidity}</div>
      </div>
    

      {/* Actions */}
      <div style={styles.buttonRow}>
        <button style={styles.decline}>Decline</button>
        <button style={styles.accept}>Accept</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 6,
    padding: 6,
    backgroundColor: '#fff',
    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 2,
    marginBottom: 2,
  },
  bookingId: {
    fontSize: '0.9rem',
    fontWeight: 500,
    color: '#374151',
  },
  detailsSection: {
    marginTop: 3,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    fontSize: '0.85rem',
    color: '#6b7280',
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
  },
  bullet: {
    width: 6,
    height: 6,
    backgroundColor: '#d1d5db',
    borderRadius: '50%',
    marginRight: 4,
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '12px 16px',
    fontSize: '0.85rem',
    marginBottom: 8,
  },
  label: {
    color: '#6b7280',
    fontSize: '0.75rem',
  },
  value: {
    fontWeight: 400,
    marginTop: 2,
    color: '#111827',
  },
  observationRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 6,
  },
  temperature: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#111827',
  },
  observation: {
    fontSize: '0.8rem',
    color: '#6b7280',
  },
  humidity: {
    fontSize: '0.75rem',
    color: '#6b7280',
    marginBottom: 0,
    
  },
  buttonRow: {
    display: 'flex',
    gap: 8,
  },
  decline: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#374151',
    border: '1px solid #d1d5db',
    padding: '8px 0',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
  accept: {
    flex: 1,
    backgroundColor: '#111827',
    color: '#fff',
    border: 'none',
    padding: '8px 0',
    borderRadius: 4,
    cursor: 'pointer',
    fontSize: '0.85rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },
};

export default BookingRequestCard;
