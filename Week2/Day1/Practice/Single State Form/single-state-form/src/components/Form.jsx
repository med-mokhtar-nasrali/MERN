import React, { useState } from 'react'

export const Form = () => {
    const [getter,setter]= useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPass:""
    })

    const allHandler = (e) =>{
        setter((prevValue)=>({
        ...prevValue,
        [e.target.name]: e.target.value
        }))
    }    
    
    return (
    <div>
        <div>
            <form className='d-flex flex-column col-6 mt-5' >
                <label htmlFor="">First Name:</label>
                <input type="text" className='form-control' name='firstName' onChange={(e)=>allHandler(e)}/>
                <label htmlFor="">Last Name:</label>
                <input type="text" className='form-control' name='lastName' onChange={(e)=>allHandler(e)}/>
                <label htmlFor="">Email:</label>
                <input type="text" className='form-control' name='email' onChange={(e)=>allHandler(e)}/>
                <label htmlFor="">Password:</label>
                <input type="password" className='form-control' name='password' onChange={(e)=>allHandler(e)} />
                <label htmlFor="">Confirm Password:</label>
                <input type="password" className='form-control' name='confimPass' onChange={(e)=>allHandler(e)} />
            </form>
        </div>
        <div className='col-6 mt-4'>
            <h4>Your Form Data</h4>
            <p>First Name: {getter.firstName}</p>
            <p>Last Name: {getter.lastName}</p>
            <p>Email: {getter.email}</p>
            <p>Password: {getter.password}</p>
            <p>Confirm Password: {getter.confirmPass}</p>
        </div>
    </div>
  )
}
