import React, { useState } from "react";

import SelectOption from "./SelectOption";

function FormClassSelect({ Classes, HandleClassSelectChange, selectedClass }) {
  const [errorMsg, setError] = useState("");

  function displayClassError(classSelect) {
    if (classSelect == "") {
      setError("Debe seleccionar una clase");
    } else {
      setError("");
    }
  }

  function handleSelect(e) {
    displayClassError(e.target.value);
    HandleClassSelectChange(e);
  }

  return (
    <div className="form-group">
      <label htmlFor="classSelect" className="fw-bold">
        Clase
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        id="classSelect"
        name="classSelect"
        value={selectedClass}
        onChange={handleSelect}
        required
      >
        <option defaultValue value="">
          Selecciona la Clase
        </option>
        {Classes.map((actualClass) => {
          return (
            <SelectOption key={actualClass.id} name={actualClass.className} />
          );
        })}
      </select>
      <small
        className={
          errorMsg.length ? "form-text text-danger fw-bold d-inline" : "d-none"
        }
      >
        {errorMsg}
      </small>
    </div>
  );
}

export default FormClassSelect;
