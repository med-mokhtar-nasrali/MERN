import React from 'react'
import { useParams } from 'react-router-dom'

const WelcomeNum = () => {
    const {id} = useParams()
    console.log(id);
    if(! isNaN(id)){
      return(
        <h1 className='mt-5'>The Number is: {id} </h1>
      )
    }
  else {return (
  
   <h1 className='mt-5'>The word is: {id} </h1>

  )}
}

export default WelcomeNum