import React from 'react'

import logo from "../../assets/imgs/logo.jpg";

function Header() {
  return (
    <header className='p-3'>
        <nav className="navbar navbar-expand-lg border-bottom border-dark-subtle pb-3">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-3 fs-3 fw-bold" href="#">
                    <img src={logo} alt="Logo" width="70" height="70" className='border border-black rounded-circle'/>
                    Fitness Gym
                </a>
                <ul className="navbar-nav fs-5">
                    <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" href="#">Clientes</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Finanzas</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Header