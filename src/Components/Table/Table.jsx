import React, { use, useState } from 'react'

import TableElement from './TableElement'
import SearchFilter from './SearchFilter'
import { renderToStaticMarkup } from 'react-dom/server';


function Table({users}) {
    const [filter, setFilter] = useState("");
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
                    <th scope='col'></th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                {
                    users.length ? renderList(users, filter) : <p className='text-center'>No hay registros disponibles</p>
                }
            </tbody>
        </table>
    </>
  )
}
function renderList(users, filterUsers)
{
    return users.map((user)=>{
        if(user.id.toString().includes(filterUsers.toLowerCase().trim())
            || user.name.toLowerCase().trim().includes(filterUsers.toLowerCase().trim()))
        {
        return <TableElement
            key={user.id}
            id={user.id}
            name={user.name}
            tel={user.tel}
            mail={user.mail}
            asistingClass={user.asistingClass}
            hour={user.hour} />
        }
    })
}


export default Table