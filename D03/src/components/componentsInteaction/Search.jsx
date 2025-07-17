import React, { useState } from 'react';

const Search = ({recWord}) => {
    const [word,setWord]=useState("")
    const handleChange=(event)=>{
        setWord(event.target.value)
        recWord(event.target.value)
    }
    return (
        <div>
            <input value={word} onChange={handleChange}></input>
        </div>
    );
}

export default Search;
