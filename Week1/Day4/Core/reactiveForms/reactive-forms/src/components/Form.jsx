import React, { useState } from 'react'

const Form = () => {
    const [firstName,setFirstName] = useState("")
    const [firstNameError,SetFirstNameError]=useState("");
    const [lastName,setLastName] = useState("")
    const [lastNameError,SetLastNameError]=useState("");
    const [email,setEmail] = useState("")
    const [emailError, setEmailError] = useState("");
    const [password,setPassword] = useState("")
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("")
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)
    const [listOfUsers, setListOfUser] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        const newobj={
            firstName,
            lastName,
            email,
            password
        }
        setListOfUser([...listOfUsers,newobj])
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setHasBeenSubmitted(true)
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            SetFirstNameError("First Name is required!");
        } else if(e.target.value.length < 2) {
            SetFirstNameError("First Name must be 2 characters or longer!");
        } else {
            
            SetFirstNameError("");
        }
    }
    const handleLasName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            SetLastNameError("Last Name is required!");
        } else if(e.target.value.length < 2) {
            SetLastNameError("Last Name must be 2 characters or longer!");
        } else {
            
            SetLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 8) {
            setEmailError("Email must be 8 characters or longer!");
        } else {
            
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be 8 characters or longer!");
        } else {
            
            setPasswordError("");
        }
    }
    const handlePasswordconfirmation = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setPasswordConfirmationError("Password Do Not Match");
        }
        else {
            
                setPasswordConfirmationError("");
            } 
        }   


  return (
    <>
    <div className='mt-5 col-8 d-flex flex-column'>
        {hasBeenSubmitted? <h1>Thank you for submitting the form!</h1>:<h1>Welcome. Please submit the form</h1> }
        <form onSubmit={submitHandler}>
            <label >First Name:</label>
            <input className='form-control' type="text" value={firstName} onChange={handleFirstName}/>
            <label >{firstNameError}</label> <br />
            <label >Last Name:</label>
            <input className='form-control ' type="text" value={lastName} onChange={handleLasName}/> 
            <label >{lastNameError}</label> <br />
            <label >Email: </label>
            <input className='form-control' type="text" value={email} onChange={handleEmail}/> 
            <label >{emailError}</label> <br />
            <label >Password: </label>
            <input className='form-control' type="password" value={password} onChange={handlePassword}/> 
            <label >{passwordError}</label> <br />
            <label >Confirm Password: </label>
            <input className='form-control' type="password" value={confirmPassword} onChange={handlePasswordconfirmation}/>
            <label >{passwordConfirmationError}</label> <br />
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