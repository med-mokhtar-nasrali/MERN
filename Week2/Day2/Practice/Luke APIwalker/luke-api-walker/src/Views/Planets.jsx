import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const Planets = () => {
    const {id} = useParams()
    const [planets,setPlanets]=useState({})
    
    useEffect((e)=>{
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((res)=> setPlanets(res.data))
        .catch((err)=> console.log("Loading...",err))
    },[id])
  return (
    <div className='card mt-5 col-9'>
        <h1 > {planets.name} </h1>
        <h3>Climate: {planets.climate} </h3>
        <h3>Terrain: {planets.terrain} </h3>
        <h3>Surface Water: { planets.surface_water} </h3>
        <h3 style={planets.population == "unknown" ? {color:"red"} : {color:"black"} } > Polpulation: {planets.population == "unknown" ? "Soon Available" : planets.population } </h3>
    </div>
  )
}

export default Planets