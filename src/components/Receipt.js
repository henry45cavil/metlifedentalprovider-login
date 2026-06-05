import React from 'react';
import './Receipt.css';

function Receipt({ expenses }) {
  const count = expenses.length;
  
  return (
    <div className="receipt-card">
      <div className="receipt-title">Batch Summary Voucher</div>
      <div className="receipt-text">
        METLIFE-PRV-ID: ACTIVE-LOCAL<br />
        LOGGED ITEMS: {count}<br />
        TIMESTAMP: {new Date().toLocaleDateString()}<br />
        STATUS: UNCOMMITTED BATCH
      </div>
    </div>
  );
}

export default Receipt;
