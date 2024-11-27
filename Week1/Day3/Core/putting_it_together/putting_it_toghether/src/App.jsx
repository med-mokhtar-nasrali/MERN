import './App.css'
import Details from './components/Details'

const data = [{
  firstname:"Jane",
  lastname:"Doe",
  age:45,
  haircolor:"Black"
},{
  firstname:"Jhon",
  lastname:"Smith",
  age:88,
  haircolor:"Brown"
}]

function App() {

  return (
    <>
    {
    data.map((e, index)=> {
      return<Details
      firstname = {e.firstname}
      lastname = {e.lastname}
      age = {e.age}
      haircolor = {e.haircolor}
      key={index}
      />
    })
  }
    </>
  )
}

export default App
