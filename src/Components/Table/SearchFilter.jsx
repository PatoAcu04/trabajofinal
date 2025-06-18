import React from 'react'
import { useState } from 'react';


function SearchFilter({users, renderFunction, filterFunction}) {
    const [inputText, setInputText] = useState("");
    return (
    <form className='d-flex justify-content-end' 
    onSubmit={((e)=>{
        e.preventDefault();
        filterFunction(inputText);
    })}>
        <input type="text" placeholder='Buscar por Nombre o ID' className='m-2 p-1' onChange={
            ((e) => {
                setInputText(e.target.value);
            })}/>
        <button>
            <img src="#" alt="Buscar" />
        </button>
    </form>
  )
}

export default SearchFilter