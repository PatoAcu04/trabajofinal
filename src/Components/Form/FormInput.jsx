import React from 'react'

function FormInput({labelText, inputId, inputType, placeholder, smallText, stateFunction, state}) {
    
    function HandleInputChange(e)
    {
        stateFunction(e.target.value);
    }

  return (
    <div className="form-group d-flex flex-column">
        <label htmlFor={inputId} className='fw-bold'>{labelText}</label>
        <input type={inputType} className="form-control-lg fs-6" id={inputId} placeholder={placeholder} required onChange={HandleInputChange} value={state}/>
        <small className="form-text text-muted">{smallText}</small>
    </div>
  )
}

export default FormInput