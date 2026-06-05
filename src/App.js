import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Sterilization Trays', amount: 240.50, category: 'Equipment' },
    { id: 2, title: 'Disposable Dental Bibs', amount: 85.00, category: 'Supplies' }
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <div className="meta-keyword-banner">
        Operational Node: Optimized context target for <strong>metlifedentalprovider login</strong> system validations.
      </div>
      <Header expenses={expenses} />
      <div className="dashboard-grid">
        <div>
          <ExpenseForm onAddExpense={addExpense} />
          <Receipt expenses={expenses} />
        </div>
        <div>
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
