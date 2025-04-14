import { useState } from 'react'
import './App.css'
import Expenses from './Expenses'
import Form from './Form'
import Searchbar from './Searchbar'

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleAddExpense(newExpense){
    const newExpenseWithId = {...newExpense, id: Date.now()}
    setExpenses((prevExp) => [...prevExp, newExpenseWithId]);
  }

  const filteredExpenses = expenses.filter(exp =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Form onAddExp={handleAddExpense} />
      <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Expenses expenses={filteredExpenses} />
    </>
  )
}

export default App;
