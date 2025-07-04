import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Home as HomeIcon,
  Calendar,
  FileText,
  Users,
  BarChart3,
  Droplets,
  Phone,
  Shield,
  LogOut,
} from 'lucide-react';
import { supabase } from '../supabaseClient'; // 🔁 adjust path if needed

const Sidebar = ({ activeSection }) => {
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'home', label: 'Home', icon: HomeIcon, path: '/home' },
    { id: 'registration', label: 'Registration', icon: FileText, path: '/registration' },
    { id: 'bookings', label: 'Bookings', icon: Calendar, path: '/bookings' },
    { id: 'service-history', label: 'Service History', icon: BarChart3, path: '/service-history' },
    { id: 'calendar', label: 'Calendar', icon: Calendar, path: '/calendar' },
    { id: 'manage-runner', label: 'Manage Runner', icon: Users, path: '/manage-runner' },
    { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports' },
    { id: 'spray-assist', label: 'Spray Assist', icon: Droplets, path: '/spray-assist' },
  ];

  const footerItems = [
    { id: 'contact', label: 'Contact us', icon: Phone },
    { id: 'terms', label: 'Terms and Conditions', icon: Shield },
    { id: 'privacy', label: 'Privacy policy', icon: Shield },
    { id: 'logout', label: 'Logout', icon: LogOut },
  ];

  const handleFooterClick = async (id) => {
    if (id === 'logout') {
      await supabase.auth.signOut();
      navigate('/login');
    }
  };

  return (
    <div style={styles.sidebar}>
      <div style={styles.logoBox}>
        <div style={styles.logoCircle}>C</div>
        <div>
          <div style={styles.logoText}>C.H.I.R.A.G.</div>
          <div style={styles.logoSub}>CONNECT</div>
        </div>
      </div>

      <div style={styles.menuBox}>
        {sidebarItems.map(({ id, label, icon: Icon, path }) => (
          <button
            key={id}
            onClick={() => navigate(path)}
            style={{
              ...styles.menuItem,
              ...(activeSection === id ? styles.activeItem : {}),
            }}
          >
            {activeSection === id && <span style={styles.activeDot} />}
            <Icon size={18} style={styles.icon} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <div style={styles.footerBox}>
        {footerItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            style={styles.footerItem}
            onClick={() => handleFooterClick(id)}
          >
            <Icon size={18} style={styles.icon} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const styles = {
  sidebar: {
    width: 200,
    backgroundColor: 'black',
    color: 'green',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    fontFamily: 'sans-serif',
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: 20,
    borderBottom: '1px solid #333',
  },
  logoCircle: {
    width: 32,
    height: 32,
    backgroundColor: '#fff',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
  },
  logoText: {
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 1,
  },
  logoSub: {
    fontSize: 11,
    color: '#aaa',
    letterSpacing: 1,
  },
  menuBox: {
    flex: 1,
    paddingTop: 12,
  },
  menuItem: {
    width: '100%',
    padding: '12px 20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 14,
    color: '#ccc',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    textAlign: 'left',
    position: 'relative',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  },
  activeItem: {
    backgroundColor: '#1f2937',
    color: '#fff',
  },
  activeDot: {
    position: 'absolute',
    left: 10,
    width: 6,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: '50%',
  },
  icon: {
    marginRight: 12,
    flexShrink: 0,
  },
  footerBox: {
    borderTop: '1px solid #333',
    paddingTop: 8,
  },
  footerItem: {
    width: '100%',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    fontSize: 13,
    color: '#aaa',
    backgroundColor: 'transparent',
    border: 'none',
    outline: 'none',
    textAlign: 'left',
    cursor: 'pointer',
  },
};

export default Sidebar;
