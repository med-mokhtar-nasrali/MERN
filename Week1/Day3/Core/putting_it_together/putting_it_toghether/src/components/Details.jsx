import React, { useState } from 'react'

const Details = (props) => {

    const [ageDisplay , setAge] =useState(props.age)
    const {firstname,lastname,age,haircolor} = props

    const addAge = ()=>{
        setAge(ageDisplay + 1)
    }



  return (
    <div>
    <h1> {firstname} {lastname}</h1>
    <p>Age: {ageDisplay} </p>
    <p>Hair Color: {haircolor} </p>
    <button onClick={addAge}>Birthday button for  {firstname} {lastname}</button>
    </div>

  )
}

export default Details