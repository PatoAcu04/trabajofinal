import React from 'react'

function Form() {
  return (
    <form>

  <div className="form-group">
    <label htmlFor="exampleInputName1">Nombre</label>
    <input type="text" className="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Ingresa tu Nombre y apellido"/>
    <small id="nameHelp" className="form-text text-muted">nunca compartiremos tu nombre.</small>
  </div>

  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Número</label>
    <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu número"/>
        <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu mail"/>
    <small id="emailHelp" className="form-text text-muted">nunca compartiremos tu email.</small>
  </div>
  </div> <br></br>
 
  <div className="checkbox">
    <p>Clase</p>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Salsa y bachata</label><br></br>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Gimnasio</label><br></br>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Zumba</label><br></br>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Pole Dance</label><br></br>
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Striptease</label><br></br>
  </div>    
  <button type="submit" className="btn btn-primary">Agregar</button>
</form>
  )
}

export default Form