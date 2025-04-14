import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-black text-white">
          <th className="p-2 text-left">Expense</th>
          <th className="p-2 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id} className="odd:bg-white even:bg-gray-100">
            <td className="p-2">{expense.title}</td>
            <td className="p-2">{expense.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ExpenseList;
