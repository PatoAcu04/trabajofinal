import React, { useState } from 'react'

import FormInput from './FormInput'
import FormClassSelect from './FormClassSelect'
import FormHourSelect from './FormHourSelect'

import { Classes } from '../../App'


function Form({UsersActive, setActiveUsers}) {
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
      smallText: "Nunca compartiremos tu nombre.",
      state: name,
      stateFunction: setName
    },
    {
      id: 2,
      labelText: "Número de Teléfono",
      inputId: "telInput",
      inputType: "number",
      placeholder: "Ingresa tu número de teléfono",
      smallText: "Nunca compartiremos tu número telefónico.",
      state: tel,
      stateFunction: setTel
    },
    {
      id: 3,
      labelText: "Email",
      inputId: "emailInput",
      inputType: "email",
      placeholder: "Ingresa tu email",
      smallText: "Nunca compartiremos tu email.",
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
  }
  
  function SaveNewRegister()
  {
      const newUser = {
        id: UsersActive[UsersActive.length - 1].id + 1,
        name: name,
        tel: tel,
        mail: email,
        asistingClass: selectedClass,
        state: "Activo",
        hour: selectedHour
      };

      setActiveUsers([...UsersActive, newUser]);
      ResetForm();
  }

  return (
    <form className='d-flex justify-content-center p-3 gap-3 m-2'
    onSubmit={
      (e)=> {
        e.preventDefault();
        SaveNewRegister();
      }
    }>
      <div className='container d-flex flex-column justify-content-start align-items-stretch'>
      {formDetails.map((detail)=>
        {
          return <FormInput
            key={detail.id}
            labelText={detail.labelText}
            inputId={detail.inputId}
            inputType={detail.inputType}
            placeholder={detail.placeholder}
            smallText={detail.smallText}
            stateFunction={detail.stateFunction}
            state={detail.state}
          />
        })}
      </div>
      <div className='container d-flex flex-column justify-content-start align-items-stretch'>
        <FormClassSelect Classes={Classes} selectedClass={selectedClass} HandleClassSelectChange={HandleClassSelectChange}/>
        <FormHourSelect Classes={Classes} selectedClass={selectedClass} HandleHourSelectChange={HandleHourSelectChange}/>
        <button type="submit" className="btn btn-primary p-2 m-2">Agregar</button>
      </div>
    </form>
  )
}

export default Form