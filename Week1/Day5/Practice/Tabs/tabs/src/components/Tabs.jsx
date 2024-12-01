import React, { useState } from 'react'

const Tabs = ({tabs}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
    <div>
        {tabs.map((tab, index) => (
            <button
            key={index}
            className={` mr-2 btn btn-info ${selectedIndex === index ? 'active' : ''}`}
            onClick={() => setSelectedIndex(index)}
            >
            {tab.name}
            </button>
        ))}
        <div className="card p-3 mt-4">
            <p>{tabs[selectedIndex].content}</p>
        </div>
    </div>
  )
}

export default Tabs