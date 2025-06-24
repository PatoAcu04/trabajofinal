import React, { useState } from 'react'

import FormInput from './FormInput'
import FormClassSelect from './FormClassSelect'
import FormHourSelect from './FormHourSelect'

import { Classes, Users } from '../../App'


function Form({UsersActive, setActiveUsers, isEditing, setEditing}) {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedHour, setSelectedHour] = useState("");

  
  const formDetails = [
    {
      id: 1,
      labelText: "Nombre",
      inputId: "nameInput",
      inputType: "text",
      placeholder: "Ingresa tu nombre y apellido",
      state: name,
      stateFunction: setName
    },
    {
      id: 2,
      labelText: "Número de Teléfono",
      inputId: "telInput",
      inputType: "number",
      placeholder: "Ingresa tu número de teléfono (con código de área)",
      state: tel,
      stateFunction: setTel
    },
    {
      id: 3,
      labelText: "Email",
      inputId: "emailInput",
      inputType: "email",
      placeholder: "Ingresa tu email",
      state: email,
      stateFunction: setEmail
    },
  ]

  function HandleClassSelectChange(e)
  {
    console.log(e.target.value);
    setSelectedClass(e.target.value);
  }

  function HandleHourSelectChange(e)
  {
    setSelectedHour(e.target.value);
  }

  function ResetForm()
  {
    setName("");
    setTel("");
    setEmail("");
    setSelectedClass("");
    setSelectedHour("");
    setEditing(-1);
  }
  
  function EditRegister()
  {
    const editUser = {
    id: isEditing,
    name: name,
    tel: tel,
    mail: email,
    asistingClass: selectedClass,
    state: "Activo",
    hour: selectedHour
    };

    const updatedUsers = [...UsersActive];
        
    const index = updatedUsers.findIndex((user) => user.id == isEditing);

    if (index !== -1) {
      updatedUsers[index] = editUser;
      setActiveUsers(updatedUsers);
    }
  }

  function SaveNewRegister()
  {
        const newUser = {
        id: UsersActive.length ? UsersActive[UsersActive.length - 1].id + 1 : UsersActive.length + 1,
        name: name,
        tel: tel,
        mail: email,
        asistingClass: selectedClass,
        state: "Activo",
        hour: selectedHour
      };

      setActiveUsers([...UsersActive, newUser]);
  }

  
  function isEmpty(text)
  {
    return !text.length
  }

  function textOnly(text)
  {
    return !(/[^a-zA-Z\s]/.test(text));
  }

  function validateName(text)
  {
    return !isEmpty(text) && textOnly(text);
  }


  function hasBlankSpaces(text)
  {
    return /\s/.test(text);
  }

  function numberOnly(text)
  {
    return !(/[^0-9]/.test(text));
  }

  function isLongerThan(text, minLength)
  {
    return text.length >= minLength;
  }

  function validateNumber(text)
  {
    return numberOnly(text) && isLongerThan(text, 10) && !hasBlankSpaces(text);
  }



  function includesMailChars(text)
  {
    return text.includes("@") && text.includes(".com");
  }

  function validateMail(text)
  {
    return includesMailChars(text) && !hasBlankSpaces(text);
  }



  function validateForm()
  {
    return validateName(name.trim()) && validateNumber(tel.trim()) && validateMail(email.trim()) && !isEmpty(selectedClass) && !isEmpty(selectedHour);
  }
  
  return (
    <form className='d-flex justify-content-center p-3 gap-3 m-2'
    onSubmit={
      (e)=> {
        e.preventDefault();
        if(validateForm())
        {
          if(isEditing != -1)
          {
            EditRegister();
          }
          else
          {
            SaveNewRegister();
          }
          ResetForm();
        }
      }
    }>
      <div className='container d-flex flex-column justify-content-between align-items-stretch gap-3'>
      {formDetails.map((detail)=>
        {
          return <FormInput
            key={detail.id}
            labelText={detail.labelText}
            inputId={detail.inputId}
            inputType={detail.inputType}
            placeholder={detail.placeholder}
            stateFunction={detail.stateFunction}
            state={detail.state}
          />
        })}
      </div>
      <div className='container d-flex flex-column justify-content-between align-items-stretch gap-3'>
        <FormClassSelect Classes={Classes} selectedClass={selectedClass} HandleClassSelectChange={HandleClassSelectChange}/>
        <FormHourSelect Classes={Classes} selectedClass={selectedClass} HandleHourSelectChange={HandleHourSelectChange}/>
        <button type="submit" className={isEditing != -1 ? "btn btn-success p-2 m-2" : "btn btn-primary p-2 m-2"} disabled={!validateForm()}>{isEditing != -1 ? "Finalizar Edición" : "Agregar"}</button>
        <button className={isEditing != -1 ? "btn btn-danger p-2 m-2" : "invisible"}
        onClick={(e)=>
        {
          e.preventDefault();
          setEditing(-1);
        }
        }
        >Cancelar</button>
      </div>
    </form>
  )
}

export default Form