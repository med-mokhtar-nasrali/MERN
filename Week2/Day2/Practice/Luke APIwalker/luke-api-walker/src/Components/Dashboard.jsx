import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
    const [id, setId] = useState('');
    const [category, setCategory] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (category && id) {
            navigate(`/${category}/${id}`);
        } else {
            alert('Please select a category and enter an ID');
        }
    };
    return (
    <div >
        <form onSubmit={handleSubmit} className='col-8 mt-5 d-flex align-items-center'>
            <select value={category}  className='mr-2 form-select Default select form-control'   onChange={(e) => setCategory(e.target.value)}>
                <option selected="">Open this select menu</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <input type="text" className='mr-2 form-control' placeholder='ID'   onChange={(e) => setId(e.target.value)}/>
            <button type="submit" className='btn btn-info' >Search</button>
        </form>
    </div>
    )
}

export default Dashboard