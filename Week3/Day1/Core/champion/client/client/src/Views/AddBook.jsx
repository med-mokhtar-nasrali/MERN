import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import NavBar from '../components/Navbar';
import { addBook } from '../services/Bookservices';

const AddBook = () => {
    const navigate=useNavigate()
    const [data,setData]=useState({
        title:"",
        author:"",
        pages:0,
        isAvailable:true
    });
    const [formErrors , setFormErrors] =useState({
        title:"",
        author:"",
        pages:""
    })

    const titleHandler = (e) => {
        const value = e.target.value.trim();
        setData(() => ({ ...data, title: e.target.value }));
    
        let errMsg = '';
        if (!value) {
            errMsg = 'Title name is required!';
        } else if (value.length < 2) {
            errMsg = 'Title must be at least 2 characters long!';
        } else if (value.length > 255) {
            errMsg = 'Title must be less than 255 characters long!';
        }
    
        setFormErrors(() => ({ ...formErrors, title: errMsg }));
    };
    
    const authorHandler =(e) => {
        const value=e.target.value.trim();
        setData(()=>({ ...data, author: e.target.value }))
        let errMsg = '';
        if (!value) {
            errMsg = 'author name is required!';
        } else if (value.length < 2) {
            errMsg = 'author must be at least 5 characters long!';
        } else if (value.length > 255) {
            errMsg = 'author must be less than 255 characters long!';
        }
    
        setFormErrors(() => ({ ...formErrors, author: errMsg }));
    }
    const pagesHandler =(e) => {
        const value=e.target.value;
        setData(()=>({ ...data, pages: e.target.value }))
        let errMsg = '';
        if (!value) {
            errMsg = 'book pages required!';
        } else if (value < 1) {
            errMsg = 'book must have at least 1 page ';}
    
        setFormErrors(() => ({ ...formErrors, pages: errMsg }));
    }
    
    const [ErrorHandler, setErrorHandler] = useState({})
    const changeHandler =(e)=>{
        titleHandler(e)
        const { name, value, type, checked } = e.target;
		setData({
			...data,
			[name]: type === "checkbox" ? checked : value,
		});
    }
    const submitHandler = (e) => {
        e.preventDefault();
        addBook(data)
            .then((res) => {
                console.log("Book added:", res.data);
                setData((prevBooks) => [...prevBooks, res.data]);
                navigate("/");
            })
            .catch((err) => {
                console.log( err.response.data.errors)
                setErrorHandler(err.response.data.errors)
            });
            
    };

    const validation=()=>{
        console.log(Object.values(formErrors))
        return Object.values(formErrors).every(value=> value==='');
    }

  return (
    <div>
        <NavBar addBook="Add a book"/>
        <div >
            <form onSubmit={submitHandler} style={{width:"500px"}} className='d-flex align-items-center flex-column   mt-5 p-5   container'>
                    <div >
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" className='form-control' name="title" onChange={titleHandler} value={data.title}/>
                        {formErrors.title &&(<p className='alert alert-danger'>{formErrors.title}</p>)}
                        {ErrorHandler.title && <p className='alert alert-warning'>{ErrorHandler.title.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="author" className='form-label'>author name</label>
                        <input type="text" className='form-control' name="author" onChange={authorHandler} value={data.author}/>
                        {formErrors.author &&(<p className='alert alert-danger'>{formErrors.author}</p>)}
                        {ErrorHandler.author && <p className='alert alert-warning'>{ErrorHandler.author.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="pages" className='form-label'>pages count </label>
                        <input type="number" style={{width:"100px"}} className='form-control' name="pages" onChange={pagesHandler} value={data.pages}/>
                        {formErrors.pages &&(<p className='alert alert-danger'>{formErrors.pages}</p>)}
                        {ErrorHandler.pages && <p className='alert alert-warning'>{ErrorHandler.pages.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="isAvailable" className='form-label'>is it Available ?:</label>
                        <input type="checkbox"  checked={data.isAvailable} name="isAvailable" onChange={(e) => changeHandler(e)} value={data.isAvailable}/>
                    </div>
                    <button className='btn-dark' style={{padding:"10px"}} disabled={! validation()}>Add Book !</button>
                </form>
        </div>
    </div>
  )};

export default AddBook