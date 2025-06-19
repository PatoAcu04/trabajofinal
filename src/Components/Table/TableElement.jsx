import React, { useState } from 'react'

function TableElement({id, name, tel, mail, asistingClass, hour, state, setUsersFunction, Users}) {

  const [deleteBtnText, setDeleteBtnText] = useState("Eliminar");

  function ConfirmDelete()
  {
    setDeleteBtnText("¿Confirmar?");
    return deleteBtnText == "¿Confirmar?";
  }

  function HandleDelete()
  {
    if(ConfirmDelete())
    {
      const newUsers = Users.filter((user)=>
      {
          return user.id != id;
      });
      setUsersFunction(newUsers);
    }
  }


  return (
    <tr>
        <th scope='row'>{id}</th>
        <td>{name}</td>
        <td>{tel}</td>
        <td>{mail}</td>
        <td>{asistingClass}</td>
        <td>{hour}</td>
        <td className={state == "Activo" ? "text-success fw-bold" : "text-danger fw-bold"}>{state}</td>
        <td>
            <button id='btn-edit' className='bg-success text-bg-success border border-success-subtle rounded p-2'>
              Editar
            </button>
        </td>
        <td>
            <button id='btn-delete' className='bg-danger text-bg-danger border border-danger-subtle rounded p-2'
            onClick={ ()=> HandleDelete() }>
              {deleteBtnText}
            </button>
        </td>
    </tr>
  )
}

export default TableElement