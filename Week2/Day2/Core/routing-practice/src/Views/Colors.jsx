import React from 'react'
import { useParams } from 'react-router-dom'

const Colors = () => {
    const {str,col,bg} = useParams()
  return (
    <h1 className='mt-5 col-12' style={{color:col , backgroundColor:bg}}>The Word is: {str}</h1>
  )
}

export default Colors