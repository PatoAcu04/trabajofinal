import React from 'react'
import { useState } from 'react';


function SearchFilter({filterFunction}) {
    const [inputText, setInputText] = useState("");
    return (
    <form className='d-flex justify-content-end'>
        <input type="text" placeholder='Buscar por Nombre o ID' className='m-2 p-1' onChange={
            ((e) => {
                filterFunction(e.target.value);
            })}/>
        <button>
            <img src="#" alt="Buscar" />
        </button>
    </form>
  )
}

export default SearchFilter