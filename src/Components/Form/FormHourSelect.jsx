import React from 'react'

import SelectOption from './SelectOption';

function FormHourSelect({Classes, selectedClass, HandleHourSelectChange}) {
  return (
    <div className="form-group">
        <label htmlFor="hourSelect" className='fw-bold'>Horario</label>
        <select className="form-select" aria-label="Default select example" id="hourSelect" name="HourSelect" disabled={selectedClass == ""} onChange={HandleHourSelectChange} required>
            <option defaultValue value="">Selecciona el Horario</option>
            {
                Classes.find((actualClass)=>{
                    return actualClass.className == selectedClass;
                })?.hours.map((hour)=>
                {
                    return <SelectOption key={hour} name={hour} />
                })
            }
        </select>
    </div>
  )
}

export default FormHourSelect