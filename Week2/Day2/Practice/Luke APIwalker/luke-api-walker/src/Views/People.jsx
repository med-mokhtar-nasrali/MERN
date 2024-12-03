import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const {id} = useParams()
    const [people,setPeople]=useState({})
    
    useEffect((e)=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res)=> setPeople(res.data))
        .catch((err)=> console.log("Loading...",err))
    },[id])
    return (
    <div className='card mt-5 col-8'>
        <h1 > {people.name} </h1>
        <h3 style={people.height> "150" ? {color:"green"}:{color:"red"}}>Height: {people.height} </h3>
        <h3 style={{color:people.hair_color}}>Hair Color: {people.hair_color == "n/a" ? "Not Available" : people.hair_color} </h3>
        <h3 style={{color:people.eye_color}}>Eye Color: {people.eye_color} </h3>
        <h3>Skin Color: {people.skin_color} </h3>
    </div>
    )
}

export default People