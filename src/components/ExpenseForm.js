import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Supplies');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    onAddExpense({
      title,
      amount: parseFloat(amount),
      category
    });
    setTitle('');
    setAmount('');
  };

  return (
    <div className="form-card">
      <h3 style={{ marginTop: 0, marginBottom: '20px' }}>Log New Expense</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Description</label>
          <input 
            type="text" 
            className="form-control"
            placeholder="e.g. Nitrile Gloves Box" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Amount ($)</label>
          <input 
            type="number" 
            step="0.01"
            className="form-control"
            placeholder="0.00" 
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select 
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <select value="Supplies">Clinical Supplies</select>
            <select value="Equipment">Lab Equipment</select>
            <select value="Utilities">Office & Administrative</select>
          </select>
        </div>
        <button type="submit" className="btn-submit">Add Entry to Logs</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
