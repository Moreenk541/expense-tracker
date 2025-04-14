import { useState } from 'react'
import './App.css'
import Expenses from './Expenses'
import Form from './Form'
import Searchbar from './Searchbar'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  

  function handleAddExpense(newExpense){
    const newExpenseWithId = {...newExpense, id: Date.now()}
    setExpenses((prevExp) => [...prevExp, newExpenseWithId]);
  }

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleDeleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const handleSortExpenses = (criteria) => {
    const sorted = [...expenses].sort((a, b) => a[criteria].localeCompare(b[criteria]));
    setExpenses(sorted);
  };


  return (
    <>
      <Form onAddExp={handleAddExpense} />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      

      
      <Expenses 
      expenses={filteredExpenses}
      onDeleteExpense={handleDeleteExpense}
      onSortExpenses={handleSortExpenses}
      />
    </>
  )
}

export default App;
