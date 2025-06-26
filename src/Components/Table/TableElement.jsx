import React, { useState } from "react";

function TableElement({
  id,
  name,
  tel,
  mail,
  asistingClass,
  hour,
  state,
  setEditing,
  fetchUsers,
}) {
  const [deleteBtnText, setDeleteBtnText] = useState("Eliminar");

  function ConfirmDelete() {
    setDeleteBtnText("¿Confirmar?");
    return deleteBtnText == "¿Confirmar?";
  }

  function HandleDelete() {
    if (ConfirmDelete()) {
      fetch(`http://localhost:3001/Users/${id}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (!res.ok) throw new Error("No se pudo eliminar el usuario");
          alert("Usuario eliminado con éxito");
        })
        .then(() => fetchUsers())
        .catch((err) => console.error("Error al eliminar: ", err));
    }
  }

  function HandleEdit() {
    setEditing(id);
  }

  return (
    <tr className="align-center">
      <th scope="row">{id}</th>
      <td className="text-center">{name}</td>
      <td className="text-center">{tel}</td>
      <td className="text-center">{mail}</td>
      <td className="text-center">{asistingClass}</td>
      <td className="text-center">{hour}</td>
      <td
        className={
          state == "Activo"
            ? "text-success fw-bold text-center"
            : "text-danger fw-bold text-center"
        }
      >
        {state}
      </td>
      <td className="text-center">
        <button
          id="btn-edit"
          className="bg-success text-bg-success border border-success-subtle rounded p-2"
          onClick={HandleEdit}
        >
          Editar
        </button>
      </td>
      <td className="text-center">
        <button
          id="btn-delete"
          className="bg-danger text-bg-danger border border-danger-subtle rounded p-2"
          onClick={HandleDelete}
        >
          {deleteBtnText}
        </button>
      </td>
    </tr>
  );
}

export default TableElement;
