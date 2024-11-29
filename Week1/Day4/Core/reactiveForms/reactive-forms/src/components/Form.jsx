import React, { useState } from 'react'

const Form = () => {
    const [firstName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [listOfUsers, setListOfUser] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setListOfUser([...listOfUsers, {firstName,lastName,email,password,confirmPassword}])
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setHasBeenSubmitted(true)
    }



  return (
    <>
    <div className='mt-5 col-8 d-flex flex-column'>
        {hasBeenSubmitted? <h1>Thank you for submitting the form!</h1>:<h1>Welcome. Please submit the form</h1> }
        <form onSubmit={submitHandler}>
            <label >First Name:</label>
            <input className='form-control' type="text" value={firstName} onChange={(e)=> setFirstName(e.target.value)}/> 
            {firstName.length <2 ? <p style={{color:"red"}}>First Name must be at least 2 characters.</p> : ""} 
            <label >Last Name:</label>
            <input className='form-control' type="text" value={lastName} onChange={(e)=> setLastName(e.target.value)}/> 
            {lastName.length <2 ? <p style={{color:"red"}}>Last Name must be at least 2 characters.</p> : ""} 
            <label >Email: </label>
            <input className='form-control' type="text" value={email} onChange={(e)=> setEmail(e.target.value)}/> 
            {email.length <8 ? <p style={{color:"red"}}>Email must be at least 8 characters.</p> : ""}
            <label >Password: </label>
            <input className='form-control' type="password" value={password} onChange={(e)=> setPassword(e.target.value)}/> 
            {password.length <8 ? <p style={{color:"red"}}>Password must be at least 8 characters.</p> : ""}
            <label >Confirm Password: </label>
            <input className='form-control' type="password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
            {confirmPassword != password ? <p style={{color:"red"}}>Password Doesn't musch</p> : ""} 
            <button className='btn btn-success mt-2'>Submit</button>
        </form>
            <div className="d-flex flex-column col-11">
                {
                listOfUsers.map((user,index)=>
                    <p key={index}>First Name: {user.firstName}  <br /> Last Name: {user.lastName} <br /> Email: {user.email}</p>
                )
            }
            </div>
    </div>
    
    
    </>
  )
}

export default Form