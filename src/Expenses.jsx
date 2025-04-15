import React from "react";
import DeleteButton from "./DeleteButton";
import SortControl from "./SortControl";

function Expenses({ expenses,onDeleteExpense, onSortExpenses }) {
  return (
    <>
    <div class ="Display">
    <SortControl onSort={onSortExpenses} />
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
              <td>
              <DeleteButton onDelete={() => onDeleteExpense(expense.id)} />
              </td>

            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Expenses;
