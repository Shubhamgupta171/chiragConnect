import React from 'react';

const LoginSuccess = () => {
  return (
    <div style={styles.page}>
      <div style={styles.leftSection}>
        <img
          src="/f1a10cf0-3334-49db-ba27-8a59a31d59a5.png" // Replace with actual image path if needed
          alt="Drone Farming"
          style={styles.image}
        />
      </div>
      <div style={styles.rightSection}>
        <img
          src="/b6cd8c19a2c31478c8fee566932af07c7fee0a67.png"
          alt="Success Icon"
          style={styles.icon}
        />
        <h2 style={styles.heading}>Login Successful</h2>
        <p style={styles.subtext}>You have successfully logged into your admin account.</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  leftSection: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  rightSection: {
    flex: 1,
    padding: 40,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '90%',
    objectFit: 'contain',
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  heading: {
    fontSize: '1.75rem',
    marginBottom: 10,
    color: '#111827',
  },
  subtext: {
    fontSize: '0.95rem',
    color: '#6b7280',
  },
};

export default LoginSuccess;
