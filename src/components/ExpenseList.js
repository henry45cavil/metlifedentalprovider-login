import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="list-card">
      <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Current Practice Logs</h3>
      {expenses.length === 0 ? (
        <p style={{ color: '#6c757d', fontStyle: 'italic' }}>No logged expenses for this provider tracking segment.</p>
      ) : (
        expenses.map(item => (
          <div key={item.id} className="expense-item">
            <div className="item-details">
              <h4>{item.title}</h4>
              <span className="badge">{item.category}</span>
            </div>
            <div className="action-block">
              <span style={{ fontWeight: 'bold' }}>${item.amount.toFixed(2)}</span>
              <button className="btn-delete" onClick={() => onDeleteExpense(item.id)}>Drop</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
