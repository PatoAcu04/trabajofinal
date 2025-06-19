import React, { use, useState } from 'react'

import TableElement from './TableElement'
import SearchFilter from './SearchFilter'


function Table({UsersActive, setActiveUsers}) {
    const [filter, setFilter] = useState("");


    function RenderList()
    {
        const DisplayUsers = UsersActive.filter((user)=>
        {
            return user.id.toString().includes(filter.trim()) ||
                    user.name.toLowerCase().includes(filter.toLowerCase().trim())
        }).map((user)=>{
            return <TableElement
                key={user.id}
                id={user.id}
                name={user.name}
                tel={user.tel}
                mail={user.mail}
                asistingClass={user.asistingClass}
                hour={user.hour}
                state={user.state}
                Users={UsersActive}
                setUsersFunction={setActiveUsers}/>
        })

        return DisplayUsers.length ? DisplayUsers : <tr><td colSpan="9" className='text-center text-danger fw-bold'>No se encontraron registros con ese filtro de búsqueda</td></tr>
}

    return (
    <>
        <SearchFilter filterFunction={setFilter}/>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Nombre y Apellido</th>
                    <th scope='col'>Teléfono</th>
                    <th scope='col'>Mail</th>
                    <th scope='col'>Clase</th>
                    <th scope='col'>Horario</th>
                    <th scope='col'>Estado</th>
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {
                    UsersActive.length ? RenderList() : <tr><td colSpan="9" className='text-center text-danger fw-bold'>No hay registros disponibles</td></tr>
                }
            </tbody>
        </table>
    </>
  )
}




export default Table