import React from 'react'

function TableElement({id, name, tel, mail, asistingClass, hour}) {
  return (
    <tr>
        <th scope='row'>{id}</th>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{mail}</td>
        <td>{asistingClass}</td>
        <td>{hour}</td>
        <td>
            <button className='bg-success text-bg-success border border-success-subtle rounded p-2'>Editar</button>
        </td>
        <td>
            <button className='bg-danger text-bg-danger border border-danger-subtle rounded p-2'>Eliminar</button>
        </td>
    </tr>
  )
}

export default TableElement