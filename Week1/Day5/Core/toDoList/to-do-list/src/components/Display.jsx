import React from 'react';

const Display = ({ items, setItems }) => {
    const toggleItem = (index) => {
    const updatedItems = items.map((item, i) =>
        i === index ? { ...item, done: !item.done } : item
    );
    setItems(updatedItems);
    };

    const deleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    };

    return (
    <div>
        <h2>Your Items</h2>
        <ul className="list-group">
        {items.map((item, index) => (
            <li key={index} className="list-group-item d-flex align-items-center">
                <input
                type="checkbox"
                checked={item.done}
                onChange={() => toggleItem(index)}
                className="me-3"
                />
                <span style={{ textDecoration: item.done ? 'line-through' : 'none', flexGrow: 1 }}>
                {item.text}
                </span>
                <button
                className="btn btn-danger btn-sm"
                onClick={() => deleteItem(index)}
                >
                Delete
                </button>
            </li>
        ))}
        </ul>
        </div>
    );
};

export default Display;
