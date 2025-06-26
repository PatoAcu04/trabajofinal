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

  function HandleDelete() {
    if (deleteBtnText !== "¿Confirmar?") {
      setDeleteBtnText("¿Confirmar?");
      setTimeout(() => {
        setDeleteBtnText("Eliminar");
      }, 2000);
      return;
    }
    fetch(`http://localhost:3001/Users/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo eliminar el usuario");
      })
      .then(() => {
        fetchUsers();
        alert("Usuario eliminado con éxito");
      })
      .catch((err) => {
        console.error("Error al eliminar: ", err);
        alert("Error al eliminar el usuario");
      });
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
        className={`text-success fw-bold text-center ${
          state == "Activo" ? "text-success" : "text-danger"
        }`}
      >
        {state}
      </td>
      <td className="text-center">
        <button
          id="btn-edit"
          className="btn btn-success btn p-2"
          onClick={HandleEdit}
        >
          Editar
        </button>
      </td>
      <td className="text-center">
        <button
          id="btn-delete"
          className="btn btn-danger btn p-2"
          onClick={HandleDelete}
        >
          {deleteBtnText}
        </button>
      </td>
    </tr>
  );
}

export default TableElement;
