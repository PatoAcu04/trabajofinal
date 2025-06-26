import React, { useState } from "react";

import TableElement from "./TableElement";
import SearchFilter from "./SearchFilter";

function Table({ users, setEditing, usersDBError, fetchUsers }) {
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
    "",
  ];

  function renderList() {
    const DisplayUsers = users
      .filter((user) => {
        return (
          user.id.toString().includes(filter.trim()) ||
          user.name.toLowerCase().includes(filter.toLowerCase().trim())
        );
      })
      .map((user) => {
        return (
          <TableElement
            key={user.id}
            id={user.id}
            name={user.name}
            tel={user.tel}
            mail={user.mail}
            asistingClass={user.asistingClass}
            hour={user.hour}
            state={user.state}
            setEditing={setEditing}
            fetchUsers={fetchUsers}
          />
        );
      });

    return DisplayUsers.length ? (
      DisplayUsers
    ) : (
      <tr>
        <td
          colSpan={columns.length}
          className="text-center text-danger fw-bold"
        >
          No se encontraron registros con ese filtro de búsqueda
        </td>
      </tr>
    );
  }

  return (
    <>
      <SearchFilter filterFunction={setFilter} />
      <table className="table table-striped align-middle">
        <thead>
          <tr className="align-center">
            {columns.map((column, index) => {
              return (
                <th scope="col" className="text-center" key={index}>
                  {column}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {users.length && !usersDBError ? (
            renderList()
          ) : usersDBError ? (
            <tr className="align-center">
              <td
                colSpan={columns.length}
                className="text-center text-danger fw-bold"
              >
                No se pueden mostrar los usuarios: Error en la base de datos -{" "}
                {usersDBError?.message}
              </td>
            </tr>
          ) : (
            <tr className="align-center">
              <td
                colSpan={columns.length}
                className="text-center text-danger fw-bold"
              >
                No hay registros disponibles
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Table;
