import React, { useState } from 'react'

function FormInput({labelText, inputId, inputType, placeholder, stateFunction, state, errorFunction}) {
  
  const [errorMsg, setError] = useState("");


    function HandleInputChange(e)
    {
      const text = e.target.value;
      stateFunction(text);
      setError(errorFunction(text));
    }

  return (
    <div className="form-group d-flex flex-column">
        <label htmlFor={inputId} className='fw-bold'>{labelText}</label>
        <input type={inputType} className="form-control-lg fs-6" id={inputId} placeholder={placeholder} required onChange={HandleInputChange} value={state}/>
        <small className={errorMsg.length ? "form-text text-danger fw-bold d-inline" : "d-none"}>{errorMsg}</small>
    </div>
  )
}

export default FormInput