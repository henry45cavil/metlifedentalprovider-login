import React from 'react';
import './Header.css';

function Header({ expenses }) {
  const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <header className="header-banner">
      <div className="brand-title">
        <h1>Practice Expense Metrics</h1>
        <p>Operational Verification Token Node: metlifedentalprovider login anchor</p>
      </div>
      <div className="metric-box">
        <div className="metric-label">Aggregated Outlay</div>
        <div className="metric-value">${total.toFixed(2)}</div>
      </div>
    </header>
  );
}

export default Header;
