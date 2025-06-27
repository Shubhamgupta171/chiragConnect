import { ChevronRight } from 'lucide-react';
import BookingRequestCard from './BookingRequestCard';

const BookingRequestsSection = () => {
  const bookingRequests = [
    {
      id: '#AB123456',
      location: 'Lorem ipsum dolor sit amet, street, Area, City, 560066',
      date: '12 June, 2023',
      time: '02:00 PM - 04:00 PM',
      name: 'Sachin Doe',
      contact: '9987654321',
      price: '24 Acres',
      crop: 'Crop name',
      temperature: '24°',
      humidity: '24,06/2024 2:00 Pm'
    },
    // Repeat object as needed
    {
      id: '#AB123456',
      location: 'Lorem ipsum dolor sit amet, street, Area, City, 560066',
      date: '12 June, 2023',
      time: '02:00 PM - 04:00 PM',
      name: 'Sachin Doe',
      contact: '9987654321',
      price: '24 Acres',
      crop: 'Crop name',
      temperature: '24°',
      humidity: '24,06/2024 2:00 Pm'
    },
    {
      id: '#AB123456',
      location: 'Lorem ipsum dolor sit amet, street, Area, City, 560066',
      date: '12 June, 2023',
      time: '02:00 PM - 04:00 PM',
      name: 'Sachin Doe',
      contact: '9987654321',
      price: '24 Acres',
      crop: 'Crop name',
      temperature: '24°',
      humidity: '24,06/2024 2:00 Pm'
    }
  ];

  return (
    <div style={{ marginBottom: 28 }}>
      <div style={styles.sectionHeader}>
        <h2 style={styles.title}>Booking Requests</h2>
        <button style={styles.viewAllButton}>
          View all <ChevronRight size={14} style={{ marginLeft: 4 }} />
        </button>
      </div>

      <div style={styles.cardGrid}>
        {bookingRequests.map((booking, index) => (
          <BookingRequestCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};
const styles = {
  card: {
    border: '1px solid #e5e7eb',
    borderRadius: 4,
    padding: 12,
    backgroundColor: 'red',
    boxShadow: '0 1px 2px rgba(0,0,0,0.04)',
  },
  header: {
    paddingBottom: 6,
    borderBottom: '1px solid #e5e7eb',
    marginBottom: 8,
  },
  bookingId: {
    fontWeight: 600,
    fontSize: '0.8rem',
    color: '#4b5563',
  },
  detailsSection: {
    marginTop: 6,
    color: '#4b5563',
    fontSize: '0.75rem',
  },
  detailRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 4,
  },
  bullet: {
    width: 6,
    height: 6,
    borderRadius: '50%',
    backgroundColor: '#d1d5db',
    marginRight: 5,
    marginTop: 1,
  },
  body: {
    fontSize: '0.75rem',
    color: '#111827',
  },
  gridRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
    fontSize: '0.7rem',
    marginBottom: 12,
  },
  label: {
    color: '#6b7280',
    fontSize: '0.65rem',
  },
  value: {
    fontWeight: 500,
    color: '#111827',
    fontSize: '0.75rem',
  },
  observationRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  temperature: {
    fontSize: '1.2rem',
    fontWeight: 600,
  },
  observation: {
    color: '#6b7280',
    fontSize: '0.65rem',
  },
  humidity: {
    fontSize: '0.65rem',
    color: '#6b7280',
    marginBottom: 6,
  },
  buttonRow: {
    display: 'flex',
    gap: 6,
  },
  decline: {
    flex: 1,
    padding: '6px 10px',
    border: '1px solid #d1d5db',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#1f2937',
    cursor: 'pointer',
    fontSize: '0.75rem',
  },
  accept: {
    flex: 1,
    padding: '6px 10px',
    borderRadius: 5,
    backgroundColor: '#111827',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.75rem',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#111827',
  },
  viewAllButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    fontWeight: 500,
    color: '#2563eb',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  cardGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 16,
  },
};

export default BookingRequestsSection;
