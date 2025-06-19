import React from 'react'

import SelectOption from './SelectOption'

function FormClassSelect({Classes, HandleClassSelectChange, selectedClass}) {
  return (
            <div className="form-group">
          <label htmlFor="classSelect" className='fw-bold'>Clase</label>
          <select className="form-select" aria-label="Default select example" id="classSelect" name="classSelect" value={selectedClass} onChange={HandleClassSelectChange} required>
            <option defaultValue value="">Selecciona la Clase</option>
            {
            Classes.map((actualClass)=>
            {
              return <SelectOption key={actualClass.id} name={actualClass.className} />
            })}
          </select>
        </div>
  )
}

export default FormClassSelect