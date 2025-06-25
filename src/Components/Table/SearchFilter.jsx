import React from "react";

import lupaImg from "../../assets/imgs/lupa.png";

function SearchFilter({ filterFunction }) {
  return (
    <form
      className="d-flex justify-content-end align-items-center m-3 me-5"
      role="search"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="input-group input-group d-flex align-items-center w-25 gap-3">
        <input
          type="search"
          placeholder="Buscar por Nombre o ID"
          className="form-control p-2 rounded-3 border border-primary"
          onChange={(e) => {
            filterFunction(e.target.value);
          }}
        />
        <img src={lupaImg} alt="Buscar" width="30" height="30" />
      </div>
    </form>
  );
}

export default SearchFilter;
