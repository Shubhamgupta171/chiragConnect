import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
  const [step, setStep] = useState('details');
 
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleDetailsSubmit = (e) => {
    e.preventDefault();
  
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) {
      setError('Enter a valid 10-digit mobile number');
      return;
    }
    setError('');
    setStep('otp');
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{6}$/.test(otp)) {
      setError('Enter a valid 6-digit OTP');
      return;
    }
    setError('');
    navigate('/success?type=login');
   
  };

  return (
    <div style={styles.page}>
      <div style={styles.leftSection}>
        <img
          src="/36c9856f8346fa1d7fbc201ba4f6c6108bce5849.png"
          alt="Drone Farming Illustration"
          style={styles.image}
        />
      </div>

      <div style={styles.rightSection}>
        <div style={styles.formBox}>
          <img src="/chirag_logo.png" alt="CHIRAG Logo" style={styles.logo} />
          <h2 style={styles.heading}>
            {step === 'details' ? 'Please login with mobile number' : 'Enter OTP'}
          </h2>

          <form onSubmit={step === 'details' ? handleDetailsSubmit : handleOtpSubmit}>
            {step === 'details' ? (
              <>
                {/* <label style={styles.label}>Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  style={styles.input}
                /> */}

                <label style={styles.label}>Mobile Number</label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="+91XXXXXXXXXX"
                  style={styles.input}
                />
              </>
            ) : (
              <>
                <p style={{ marginBottom: 10, fontSize: '0.9rem' }}>
                  OTP sent to <strong>{mobileNumber}</strong>
                </p>
                <label style={styles.label}>Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  placeholder="123456"
                  style={styles.input}
                />
              </>
            )}

            {error && <p style={styles.error}>{error}</p>}

            <button type="submit" style={styles.button}>
              {step === 'details' ? ' Get OTP' : 'Verify OTP'}
            </button>

            {step === 'otp' && (
              <>
                <button type="button" onClick={() => setStep('details')} style={styles.backButton}>
                  Back
                </button>
                <p style={styles.resend}>
                  Didn’t receive OTP?{' '}
                  <button type="button" style={styles.resendLink} onClick={() => alert('OTP resent')}>
                    Resend
                  </button>
                </p>
              </>
            )}
          </form>

          <p style={styles.terms}>
            By registering, you agree to our{' '}
            <a href="/terms" style={styles.link}>Terms of Service</a> and{' '}
            <a href="/privacy" style={styles.link}>Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

const sharedFieldStyle = {
  width: '100%',
  height: '48px',
  padding: '0 12px',
  fontSize: '1rem',
  borderRadius: 6,
  boxSizing: 'border-box',
};

const styles = {
  page: {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  leftSection: {
    flex: 1,
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  rightSection: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  formBox: {
    width: '100%',
    maxWidth: 360,
  },
  logo: {
    maxWidth: '290px',
    width: '100%',
    height: 'auto',
    marginBottom: 30,
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  heading: {
    textAlign: 'center',
    fontSize: '1.25rem',
    marginBottom: 30,
    color: 'gray',
  },
  label: {
    fontSize: '0.9rem',
    marginBottom: 6,
    display: 'block',
    color: '#333',
  },
  input: {
    ...sharedFieldStyle,
    border: '1px solid #ccc',
    marginBottom: 16,
  },
  button: {
    ...sharedFieldStyle,
    backgroundColor: '#111827',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginBottom: 10,
  },
  backButton: {
    ...sharedFieldStyle,
    backgroundColor: '#fff',
    color: '#111827',
    border: '1px solid #ccc',
    cursor: 'pointer',
    marginTop: 8,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: 10,
  },
  resend: {
    fontSize: '0.85rem',
    textAlign: 'center',
    marginTop: 8,
  },
  resendLink: {
    color: '#2563eb',
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    fontWeight: 500,
    textDecoration: 'underline',
  },
  terms: {
    fontSize: '0.75rem',
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
  link: {
    color: '#2563eb',
    textDecoration: 'underline',
  },
};

export default Registration;
