import React, { useState } from "react";

function Form({ onAddExp }) {
  const [expenseName, setExpenseName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      name: expenseName,
      description,
      category,
      amount,
      date
    };

    onAddExp(newExpense);

    setExpenseName('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  };

  return (
    <>
      <div>
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life. Record, categorize and analyze your spending.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <h1>Add Expense</h1>
        <label>Enter your expense details below</label><br />
        <input type="text" placeholder="Enter expense Name" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} /><br />
        <input type="text" placeholder="Enter expense Description" value={description} onChange={(e) => setDescription(e.target.value)} /><br />
        <input type="text" placeholder="Enter expense Category" value={category} onChange={(e) => setCategory(e.target.value)} /><br />
        <input type="number" placeholder="Enter expense Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /><br />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /><br />
        <button type="submit" >Submit</button>
      </form>
    </>
  );
};

export default Form;

