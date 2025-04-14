import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import SearchBar from './components/SearchBar';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([expense, ...expenses]);
  };

  const filteredExpenses = expenses.filter(exp =>
    exp.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen font-sans">
      <h1 className="text-4xl font-bold mb-2">Expense Tracker</h1>
      <p className="mb-6 text-gray-500">Start taking control of your finances and life. Record,
      categorize and analyze your spending.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <div>
          <SearchBar query={searchQuery} onChange={setSearchQuery} />
          <ExpenseList expenses={filteredExpenses} />
        </div>
      </div>
    </div>
  );
};

export default App;
