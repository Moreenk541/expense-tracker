import { useState } from 'react'
import './App.css'
import Expenses from './Expenses'
import Form from './Form'
import Searchbar from './Searchbar'

function App() {
  const [expenses, setExpenses] = useState([]);

  function handleAddExpense(newExpense){
    const newExpenseWithId = {...newExpense, id: Date.now()}
    setExpenses( (prevExp) => [...prevExp, newExpenseWithId]);
  }
  
  return (
    <>
      <Form  onAddExp = {handleAddExpense}/>
      <Expenses />
    </>
  )
}

export default App
