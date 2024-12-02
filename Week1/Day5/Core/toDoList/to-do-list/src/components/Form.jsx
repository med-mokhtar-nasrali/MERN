import React, { useState } from 'react';

const Form = ({ addItem }) => {
    const [item, setItem] = useState({ text: "", done: false });

    const handleFormSubmit = (e) => {
    e.preventDefault();
    if (item.text.length > 2) {
        addItem(item);
    }
    setItem({ text: "", done: false });
    };

    return (
    <div>
        <h1>Item Tracker</h1>
        <form onSubmit={handleFormSubmit}>
            <div className="col-3">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Enter an item"
                    onChange={(e) => setItem({ ...item, text: e.target.value })}
                    value={item.text}
                />
                <br />
                <button className="btn btn-outline-primary" type="submit">
                    Add Item
                </button>
            </div>
                <p className='mt-2' style={{color:"red"}}>(The task need to be at least 2 characters)</p>
        </form>
    </div>
    );
};

export default Form;
