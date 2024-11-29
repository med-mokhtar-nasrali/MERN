import React from 'react'

const Show = ({boxes,deleteBox}) => {
    
    return (<div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {boxes.map((box) => (
            <div key={box.id} style={{ position: "relative" }}>
            <div
                style={{
                    backgroundColor: box.color,
                    width: `${box.size}px`,
                    height: `${box.size}px`,
                    border: "3px solid gray",
                    borderRadius:"5px",
                    marginBottom:"3px"
                }}
            > <button className='btn btn-danger mt-3' onClick={()=>deleteBox(box.index)}>Delete</button></div>
                
            </div>
        ))}
        </div>
    );
    };

export default Show