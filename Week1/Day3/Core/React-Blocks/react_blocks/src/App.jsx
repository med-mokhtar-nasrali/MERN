import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Advertisement from './components/Advertisement'
import Flexing from './components/Flexing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
        <Header/>
        <Flexing/>
    </div>
  )
}

export default App
