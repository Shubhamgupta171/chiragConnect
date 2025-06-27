import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function SuccessPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type'); // 'signup' or 'login'

  // Set correct titles and messages based on type
  const title = type === 'signup' ? 'Sign up Successful' : 'Login Successful';
  const message =
    type === 'signup'
      ? 'You have successfully created your account.'
      : 'You have successfully logged into your admin account.';

  // Auto-redirect to /home after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          padding: '2rem',
          backgroundColor: '#fff',
          borderRadius: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <img
          src="/login.png"
          alt="Success Illustration"
          style={{ width: '400px', borderRadius: '1rem' }}
        />
        <div style={{ textAlign: 'center' }}>
          <img
            src="/check.png"
            alt="Success"
            style={{ width: '70px', height: '70px', marginBottom: '1rem' }}
          />
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>{title}</h2>
          <p style={{ color: '#555' }}>{message}</p>
        </div>
      </div>
    </div>
  );
}
