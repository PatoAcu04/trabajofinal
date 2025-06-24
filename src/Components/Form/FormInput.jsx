import React, { useState } from 'react'

function FormInput({labelText, inputId, inputType, placeholder, stateFunction, state}) {
  
  const [errorMsg, setError] = useState("");


    function isEmpty(text)
    {
      return !text.length
    }

    function textOnly(text)
    {
      return !(/[^a-zA-Z\s]/.test(text));
    }

    function numberOnly(text)
    {
      return !(/[^0-9]/.test(text));
    }

    function isLongerThan(text, minLength)
    {
      return text.length >= minLength;
    }

    function includesMailChars(text)
    {
      return text.includes("@") && text.includes(".com");
    }

    function hasBlankSpaces(text)
    {
      return /\s/.test(text);
    }

    function displayNumberLengthError(text)
    {
      if(isLongerThan(text, 10))
      {
        setError("");
      }
      else
      {
        setError("El número telefónico debe tener 10 digitos");
        return;
      }
    }

    function displayErrorName(text)
    {
      if(textOnly(text))
      {
        setError("");
      }
      else
      {
        setError("No puede contener números o caracteres especiales");
        return;
      }
    }

    function displayErrorNumber(text)
    {
      if(!hasBlankSpaces(text))
      {
        if(numberOnly(text))
        {
          displayNumberLengthError(text);
        }
        else
        {
          setError("El número no puede contener caracteres alfanuméricos");
          return;
        }
      }
      else
      {
        setError("El número no puede contener espacios en blanco");
        return;
      }
    }

    function displayErrorEmail(text)
    {
      if(!hasBlankSpaces(text))
      {
        if(includesMailChars(text))
        {
          setError("");
        }
        else
        {
          setError("El texto debe contener una @ y un .com");
          return;
        }
      }
      else
      {
        setError("El mail no puede contener espacios en blanco");
        return;
      }
    }

    function displayErrors(text)
    {
        if(isEmpty(text))
        {
          setError("El campo no puede estar vacío");
          return;
        }
        else
        {
          switch(inputId)
          {
            case "nameInput":
              displayErrorName(text);
            break;
            case "telInput":
              displayErrorNumber(text);
            break;
            case "emailInput":
              displayErrorEmail(text);
            break;
          }
        }
    }

    function HandleInputChange(e)
    {
      const text = e.target.value;
      stateFunction(text);
      displayErrors(text.trim());
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