import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Planets from './Views/Planets'
import People from './Views/People'

function App() {

  return (
    <>
    <Routes>
    <Route path='/' element={<Dashboard/>}/>
    <Route path='/planets/:id'element={[<Dashboard/>,<Planets/>]}/>
    <Route path='/people/:id'element={[<Dashboard/>,<People/>]}/>
    </Routes>
    </>
  )
}

export default App
