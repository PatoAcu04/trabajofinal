import React, { use, useState } from 'react'

import TableElement from './TableElement'
import SearchFilter from './SearchFilter'


function Table({UsersActive, setActiveUsers}) {
    const [filter, setFilter] = useState("");

    const columns = [
        "#",
        "Nombre y Apellido",
        "Teléfono",
        "Mail",
        "Clase",
        "Horario",
        "Estado",
        "",
        ""
    ]

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
        <table className='table table-striped align-middle'>
            <thead>
                <tr className='align-center'>
                    {columns.map((column, index)=>
                    {
                        return <th scope='col' className='text-center' key={index}>{column}</th>
                    })}
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {
                    UsersActive.length ? RenderList() : <tr className='align-center'><td colSpan="9" className='text-center text-danger fw-bold'>No hay registros disponibles</td></tr>
                }
            </tbody>
        </table>
    </>
  )
}




export default Table