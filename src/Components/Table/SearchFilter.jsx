import React from 'react'


function SearchFilter({filterFunction}) {
    return (
    <form className='d-flex justify-content-end'>
        <input type="text" placeholder='Buscar por Nombre o ID' className='m-2 p-1'
        onChange={
            ((e) => {
                filterFunction(e.target.value);
            })
        }
        />
        <img src="#" alt="Buscar" />
    </form>
  )
}

export default SearchFilter