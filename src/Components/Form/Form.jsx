import React, { useEffect, useState } from "react";

import FormInput from "./FormInput";
import FormClassSelect from "./FormClassSelect";
import FormHourSelect from "./FormHourSelect";

function Form({
  users,
  isEditing,
  setEditing,
  Classes,
  classDBError,
  fetchUsers,
}) {
  // Estados de los campos del form
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  useEffect(() => {
    const index = users.findIndex((user) => user.id == isEditing);

    if (index !== -1) {
      const user = users[index];
      setName(user.name || "");
      setTel(user.tel || "");
      setEmail(user.mail || "");
      setSelectedClass(user.asistingClass || "");
      setSelectedHour(user.hour || "");
    }
  }, [isEditing]);

  // Detalles de los campos del form
  const formDetails = [
    {
      id: 1,
      labelText: "Nombre",
      inputId: "nameInput",
      inputType: "text",
      placeholder: "Ingresa tu nombre y apellido",
      state: name,
      stateFunction: setName,
      errorFunction: displayErrorName,
    },
    {
      id: 2,
      labelText: "Número de Teléfono",
      inputId: "telInput",
      inputType: "number",
      placeholder: "Ingresa tu número de teléfono (con código de área)",
      state: tel,
      stateFunction: setTel,
      errorFunction: displayErrorNumber,
    },
    {
      id: 3,
      labelText: "Email",
      inputId: "emailInput",
      inputType: "email",
      placeholder: "Ingresa tu email",
      state: email,
      stateFunction: setEmail,
      errorFunction: displayErrorEmail,
    },
  ];

  function HandleClassSelectChange(e) {
    setSelectedClass(e.target.value);
  }

  function HandleHourSelectChange(e) {
    setSelectedHour(e.target.value);
  }

  function ResetForm() {
    setName("");
    setTel("");
    setEmail("");
    setSelectedClass("");
    setSelectedHour("");
    setEditing(-1);
  }

  // ========= REGISTROS =========
  function EditRegister() {
    const editUser = {
      id: isEditing,
      name: name,
      tel: tel,
      mail: email,
      asistingClass: selectedClass,
      state: "Activo",
      hour: selectedHour,
    };

    const index = users.findIndex((user) => user.id == isEditing);

    if (index !== -1) {
      fetch(`http://localhost:3001/Users/${isEditing}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editUser),
      })
        .then((res) => {
          if (!res.ok) throw new Error("No se pudo editar el usuario");
        })
        .then(() => {
          alert("Usuario editado con éxito");
          fetchUsers();
        })
        .catch((err) => {
          console.log("Error al editar el usuario ", err);
          alert("Error al editar el usuario");
        });
    } else {
      alert("No se encontró al usuario");
    }
  }

  function SaveNewRegister() {
    const newUser = {
      id: users.length
        ? (parseInt(users[users.length - 1].id) + 1).toString()
        : (users.length + 1).toString(),
      name: name,
      tel: tel,
      mail: email,
      asistingClass: selectedClass,
      state: "Activo",
      hour: selectedHour,
    };

    fetch("http://localhost:3001/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (!res.ok) throw new Error("No se pudo agregar el usuario");
      })
      .then(() => {
        alert("Usuario agregado con éxito");
        fetchUsers();
      })
      .catch((err) => {
        console.log("Error ", err.message);
        alert("Error al agregar el usuario");
      });
  }

  // ========= VALIDACIONES =========
  function isEmpty(text) {
    return !text.length;
  }

  // Input de nombre
  function textOnly(text) {
    return !/[^a-zA-ZñÑ ]/.test(text);
  }

  function validateName(text) {
    return !isEmpty(text) && textOnly(text);
  }

  function hasBlankSpaces(text) {
    return /\s/.test(text);
  }

  // Input de telefono
  function numberOnly(text) {
    return !/[^0-9]/.test(text);
  }

  function isShorterThan(text, minLength) {
    return text.length < minLength;
  }

  function validateNumber(text) {
    return (
      numberOnly(text) && !isShorterThan(text, 10) && !hasBlankSpaces(text)
    );
  }

  // Input de mail
  function includesMailChars(text) {
    return text.includes("@") && text.includes(".com");
  }

  function validateMail(text) {
    return includesMailChars(text) && !hasBlankSpaces(text);
  }

  function validateForm() {
    return (
      validateName((name || "").trim()) &&
      validateNumber((tel || "").trim()) &&
      validateMail((email || "").trim()) &&
      !isEmpty(selectedClass) &&
      !isEmpty(selectedHour)
    );
  }

  // Telefono
  function displayErrorNumber(text) {
    if (isEmpty(text)) return "El campo no puede estar vacio";
    if (hasBlankSpaces(text))
      return "El número no puede contener espacios en blanco";
    if (!numberOnly(text))
      return "El número no puede contener caracteres alfanuméricos";
    if (isShorterThan(text, 10))
      return "El número debe tener al menos 10 dígitos";
    return "";
  }

  // Nombre
  function displayErrorName(text) {
    if (isEmpty(text)) return "El campo no puede estar vacio";
    if (!textOnly(text))
      return "No puede contener números o caracteres especiales";
    return "";
  }

  // Mail
  function displayErrorEmail(text) {
    if (isEmpty(text)) return "El campo no puede estar vacio";
    if (hasBlankSpaces(text))
      return "El mail no puede contener espacios en blanco";
    if (!includesMailChars(text))
      return "El texto debe contener una @ y un .com";
    return "";
  }

  return (
    <form
      className="d-flex justify-content-center p-3 gap-3 m-2"
      onSubmit={(e) => {
        e.preventDefault();
        if (validateForm()) {
          if (isEditing != -1) {
            EditRegister();
          } else {
            SaveNewRegister();
          }
          ResetForm();
        }
      }}
    >
      <div className="container d-flex flex-column justify-content-start align-items-stretch gap-3">
        {formDetails.map((detail) => {
          return (
            <FormInput
              key={detail.id}
              labelText={detail.labelText}
              inputId={detail.inputId}
              inputType={detail.inputType}
              placeholder={detail.placeholder}
              stateFunction={detail.stateFunction}
              state={detail.state}
              errorFunction={detail.errorFunction}
            />
          );
        })}
      </div>
      <div className="container d-flex flex-column justify-content-start align-items-stretch gap-3">
        {Classes.length ? (
          <FormClassSelect
            Classes={Classes}
            selectedClass={selectedClass}
            HandleClassSelectChange={HandleClassSelectChange}
          />
        ) : (
          <div className="text-danger text-center">
            <p className="fw-bold">
              No se pueden mostrar las clases: Error en la base de datos
            </p>
            <p>{classDBError?.message}</p>
          </div>
        )}

        {Classes.length ? (
          <FormHourSelect
            Classes={Classes}
            selectedClass={selectedClass}
            selectedHour={selectedHour}
            HandleHourSelectChange={HandleHourSelectChange}
          />
        ) : (
          <div className="text-danger text-center">
            <p className="fw-bold">
              No se pueden mostrar los horarios: Error en la base de datos
            </p>
            <p>{classDBError?.message}</p>
          </div>
        )}

        <button
          type="submit"
          className={`btn p-2 m-2 ${
            isEditing != -1 ? "btn-success" : "btn-primary"
          }`}
          disabled={!validateForm()}
        >
          {isEditing != -1 ? "Finalizar Edición" : "Agregar"}
        </button>
        <button
          type="button"
          className={isEditing != -1 ? "btn btn-danger p-2 m-2" : "invisible"}
          onClick={(e) => {
            e.preventDefault();
            ResetForm();
          }}
        >
          Cancelar
        </button>
      </div>
    </form>
  );
}

export default Form;
