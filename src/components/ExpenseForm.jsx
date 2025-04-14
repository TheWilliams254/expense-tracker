import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({ title: '', description: '', amount: '', date: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount) return;

    onAddExpense({ ...form, id: Date.now() });
    setForm({ title: '', description: '', amount: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg bg-white shadow">
      <h2 className="text-xl font-semibold">Add Expense</h2>
      <input type="text" name="title" placeholder="Title" value={form.title} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="text" name="description" placeholder="Description" value={form.description} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="number" name="amount" placeholder="Amount" value={form.amount} onChange={handleChange} className="w-full border p-2 rounded" />
      <input type="date" name="date" value={form.date} onChange={handleChange} className="w-full border p-2 rounded" />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
};

export default ExpenseForm;
