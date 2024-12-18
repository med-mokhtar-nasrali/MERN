
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BookCatalog from './Views/BookCatalog'
import BookDetails from './Views/BookDetails'
import AddBook from './Views/AddBook'
import UpdateBook from './Views/UpdateBook'
import ErrorHandler from './Views/Errorhandler'


function App() {

  return (
    <>
    <Routes>
      <Route path='/:id/details' element={<BookDetails/>}/>
      <Route path='/create' element={<AddBook/>}/>
      <Route path='/:id/update' element={<UpdateBook/>}/>
      <Route path='/' element={<BookCatalog/>}/>
      <Route path="*" element={<ErrorHandler />} />
    </Routes>
    </>
  )
}

export default App
