import React from 'react';
import Sidebar from '../components/Sidebar';
import RunnersTable from '../components/RunnersTable';
import BookingRequestsSection from '../components/BookingRequestSection';
import EnvironmentReport from '../components/EnvironmentReport';

const Home = () => {
  return (
    <div>
      {/* Sidebar Fixed */}
      <Sidebar />

      {/* Main Content */}
      <main style={styles.content}>
        <BookingRequestsSection />
        <RunnersTable />
        <EnvironmentReport />
      </main>
    </div>
  );
};

const styles = {
  content: {
    marginLeft: 200, // same as sidebar width
    padding: '24px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
};

export default Home;
