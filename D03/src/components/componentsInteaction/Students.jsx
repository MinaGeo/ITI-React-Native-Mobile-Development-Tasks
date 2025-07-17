import React from 'react';

const Students = ({stds}) => {
    return (
        <div>
            <h1>Students</h1>
            {stds.map(std=><h1 key={std.id}>{std.name}</h1>)}
        </div>
    );
}

export default Students;
