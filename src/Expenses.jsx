import React, { useState } from "react";
import Form from "./Form";

function Expenses( ) {
    const [expenses, setExpenses] = useState([]);

    const handleAddExpense = (newExpense) => {
      setExpenses([...expenses, newExpense]);
    };

  
  return (
    <>
     

      <table border="1">
        <thead>
          <tr>
            <th>Expense</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.name}</td>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td>{expense.amount}</td>
              <td>{expense.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Expenses;