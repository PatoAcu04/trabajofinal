import React from "react";
import { useState } from "react";

import SelectOption from "./SelectOption";

function FormHourSelect({
  Classes,
  selectedClass,
  HandleHourSelectChange,
  selectedHour,
}) {
  const [errorMsg, setError] = useState("");

  function displayHourError(hourSelect) {
    if (hourSelect == "") {
      setError("Debe seleccionar un horario");
    } else {
      setError("");
    }
  }

  function handleSelect(e) {
    displayHourError(e.target.value);
    HandleHourSelectChange(e);
  }

  return (
    <div className="form-group">
      <label htmlFor="hourSelect" className="fw-bold">
        Horario
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="hourSelect"
        name="HourSelect"
        disabled={selectedClass == ""}
        value={selectedHour}
        onChange={handleSelect}
        required
      >
        <option value="">Selecciona el Horario</option>
        {Classes.find(
          (actualClass) => actualClass.className == selectedClass
        )?.hours.map((hour, index) => (
          <SelectOption key={index} name={hour} />
        ))}
      </select>
      <small
        className={
          errorMsg.length
            ? "form-text text-danger fw-bold d-inline"
            : "invisible"
        }
      >
        {errorMsg}
      </small>
    </div>
  );
}

export default FormHourSelect;
