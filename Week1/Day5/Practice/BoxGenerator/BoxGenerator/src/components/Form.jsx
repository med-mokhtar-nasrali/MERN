import React, { useState } from 'react'

const Form = ({addBox}) => {
    const [color,setColor]=useState('')
    const [size,setSize]=useState(100)
    const [index,setindex]=useState(0)
    const HandleSubmit =(e)=>{
        e.preventDefault()
        const newBox={
            color,
            size,
            index
        }
        setindex(index+1)
        addBox(newBox)
        
    }
    return (
    <div>
        <form onSubmit={HandleSubmit}  className='d-flex flex-column col-3 mb-5'>
        <label >Color :</label>
        <input className='form-control' name='color' value={color} onChange={ (e) => setColor(e.target.value)}/>
        <label>Size(pixels) :</label>
        <input className='form-control' type='number' name='size' value={size} onChange={ (e) => setSize(e.target.value)}/>
        <button className='btn btn-info col-3 mt-2'>Add</button>
        </form>
    </div>
    )
}

export default Form