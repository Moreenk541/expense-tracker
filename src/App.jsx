import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expenses from './Expenses'
import Form from './Form'
import Searchbar from './Searchbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form/>
       <Searchbar/>
      <Expenses/>
    </>
  )
}

export default App
