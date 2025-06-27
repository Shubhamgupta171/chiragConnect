import React from 'react';

const EnvironmentalReport = () => {
  return (
    <div style={{ marginTop: '2rem' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
        <h2 style={{ fontSize: 24, fontWeight: 700, color: '#111827' }}>Environmental Report</h2>
        <select
          style={{
            border: '1px solid #d1d5db',
            borderRadius: 6,
            padding: '6px 12px',
            fontSize: 14,
            color: '#374151',
          }}
        >
          <option>Weekly</option>
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>

      {/* Report Cards */}
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        {/* Water Saved */}
        <div style={styles.card}>
             <h3 style={styles.label}>Water saved till now</h3>
          <div style={styles.iconWrapper}>
    
            <img src="/drop.png" alt="Water Saved" style={styles.icon} />
          </div>
         
          <div style={styles.valueBlue}>400</div>
          <div style={styles.unit}>litres</div>
        </div>

        {/* Pesticide */}
        <div style={styles.card}>
              <h3 style={styles.label}>Pesticide till now</h3>
          <div style={styles.iconWrapper}>
            <img src="/leaf.png" alt="Pesticide" style={styles.icon} />
          </div>
        
          <div style={styles.valueRed}>40%</div>
          <div style={styles.unit}>decrease</div>
        </div>

        {/* Carbon Footprint */}
        <div style={styles.card}>

             <h3 style={styles.label}>Carbon footprint</h3>
          <div style={styles.iconWrapper}>
            <img src="/bottle.png" alt="Carbon Footprint" style={styles.icon} />
          </div>
         
          <div style={styles.valueGreen}>40%</div>
          <div style={styles.unit}>Less</div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: '#fff',
    padding: 24,
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    width: 260,
    textAlign: 'center',
    flex: '1 1 260px',
  },
  iconWrapper: {
    marginBottom: 12,
    width: 64,
    height: 64,
    borderRadius: '50%',
    backgroundColor: '#f9fafb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginInline: 'auto',
  },
  icon: {
    width: 42,
    height: 42,
  },
  label: {
    fontSize: 16,
    color: '#374151',
    fontWeight: 500,
    marginBottom: 8,
  },
  valueBlue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  valueRed: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ef4444',
  },
  valueGreen: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#10b981',
  },
  unit: {
    fontSize: 14,
    color: '#6b7280',
  },
};

export default EnvironmentalReport;
