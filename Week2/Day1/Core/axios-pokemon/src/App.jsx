import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {

  const [pokemon , SetPokemon]= useState([])


  const axiousFetch = ()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
    .then((res)=>{
      console.log(res.data.results);
      SetPokemon(res.data.results)
    })
    .catch(err =>
      console.log(err)
    )
  }

useEffect(()=>{
  axiousFetch()
},[])








  return (
    < >
      <div className='mt-5'>
        <h1>Pokemons</h1>
        {
          pokemon.map((pok,indx)=>{
            return(
            <div className='card mt-2' style={{backgroundColor: "black", cursor:"pointer"}}>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <h3 key={indx}>Name: {pok.name} </h3>
                </li>
              </ul>   
            </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
