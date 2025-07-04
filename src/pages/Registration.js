import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const Registration = () => {
  const [step, setStep] = useState('details');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fullPhone = `+91${mobileNumber}`;

  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim()) return setError('Name is required');
    if (!email.trim() || !email.includes('@')) return setError('Enter a valid email');
    if (!/^[6-9]\d{9}$/.test(mobileNumber)) return setError('Enter a valid 10-digit mobile number');

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithOtp({ phone: fullPhone });

      if (error) throw error;

      console.log('OTP Sent:', data);
      setStep('otp');
    } catch (err) {
      console.error('OTP send error:', err);
      setError('Failed to send OTP: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!/^\d{6}$/.test(otp)) return setError('Enter a valid 6-digit OTP');

    try {
      setLoading(true);
      const { data, error } = await supabase.auth.verifyOtp({
        phone: fullPhone,
        token: otp,
        type: 'sms',
      });

      if (error) throw error;

      console.log('OTP Verified:', data);

      // Save additional user info to your DB
      await supabase.from('users').upsert({
        id: data.user.id,
        name,
        email,
        phone: fullPhone,
      });

      navigate('/success?type=signup');
    } catch (err) {
      console.error('OTP verification error:', err);
      setError('OTP verification failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOtp({ phone: fullPhone });
      if (error) throw error;
      alert('OTP resent successfully');
    } catch (err) {
      setError('Failed to resend OTP: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.leftSection}>
        <img src="/36c9856f8346fa1d7fbc201ba4f6c6108bce5849.png" alt="Illustration" style={styles.image} />
      </div>

      <div style={styles.rightSection}>
        <div style={styles.contentWrapper}>
          <img src="/chirag_logo.png" alt="CHIRAG Logo" style={styles.logo} />
          <h2 style={styles.heading}>Please Signup with Mobile Number & Email</h2>

          <form onSubmit={step === 'details' ? handleDetailsSubmit : handleOtpSubmit} style={styles.form}>
            {step === 'details' ? (
              <>
                <label style={styles.label}>Mobile Number*</label>
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  placeholder="837283XXXX"
                  style={styles.input}
                />

                <label style={styles.label}>Email*</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  style={styles.input}
                />

                <label style={styles.label}>Name*</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Rahul Babu"
                  style={styles.input}
                />
              </>
            ) : (
              <>
                <p style={styles.otpText}>
                  OTP sent to <strong>{fullPhone}</strong>
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

            <button type="submit" style={styles.button} disabled={loading}>
              {loading ? 'Please wait...' : step === 'details' ? 'Get OTP' : 'Verify OTP'}
            </button>

            {step === 'otp' && (
              <>
                <button type="button" onClick={() => setStep('details')} style={styles.backButton}>
                  Back
                </button>
                <p style={styles.resend}>
                  Didn’t receive OTP?{' '}
                  <button type="button" style={styles.resendLink} onClick={resendOtp}>
                    Resend
                  </button>
                </p>
              </>
            )}
          </form>

          <p style={styles.footerText}>
            Already have an account?{' '}
            <span style={styles.loginLink} onClick={() => navigate('/login')}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Reuse your existing styles (unchanged)
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
    padding: 30,
    backgroundColor: 'white',
  },
  rightSection: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: 'white',
  },
  contentWrapper: {
    width: '100%',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
  },
  logo: {
    width: 260,
    marginBottom: 4,
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
    alignSelf: 'center',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  label: {
    fontSize: '0.95rem',
    marginBottom: 4,
    color: '#374151',
  },
  input: {
    height: 44,
    padding: '0 10px',
    fontSize: '1rem',
    borderRadius: 8,
    border: '1px solid #d1d5db',
    outline: 'none',
    marginBottom: 10,
  },
  button: {
    height: 44,
    borderRadius: 8,
    border: 'none',
    backgroundColor: '#2E2E2E',
    color: '#fff',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: 10,
  },
  backButton: {
    height: 44,
    borderRadius: 8,
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#333',
    fontWeight: 500,
    cursor: 'pointer',
    marginTop: 10,
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginTop: -5,
    marginBottom: 10,
  },
  resend: {
    fontSize: '0.85rem',
    textAlign: 'center',
    marginTop: 6,
  },
  resendLink: {
    background: 'none',
    border: 'none',
    color: '#2E2E2E',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontWeight: 500,
  },
  footerText: {
    textAlign: 'center',
    color: '#6b7280',
    marginTop: 25,
    fontSize: '0.9rem',
  },
  loginLink: {
    fontWeight: 600,
    color: '#000',
    cursor: 'pointer',
    marginLeft: 4,
  },
  otpText: {
    marginBottom: 8,
    textAlign: 'center',
    color: '#111827',
  },
};


export default Registration;
