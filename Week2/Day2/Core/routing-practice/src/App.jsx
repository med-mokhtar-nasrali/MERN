import { useState } from 'react'
import './App.css'
import Home from './Views/Home'
import {Route,Routes} from 'react-router-dom'
import WelcomeNum from './Views/WelcomeNum'
import Colors from './Views/Colors'

function App() {


  return (
    <>
      <Routes>
        <Route path="/home" element= {<Home/>}/>
        <Route path="/:id" element= {<WelcomeNum/>}/>
        <Route path='/:str/:col/:bg' element={<Colors/>}/>
      </Routes>
    </>
  )
}

export default App
