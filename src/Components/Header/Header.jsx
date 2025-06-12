import React from 'react'

function Header() {
  return (
    <header className='navbar p-3 d-flex align-items-center'>
        <a href="#" className='navbar-brand'>
            <img src="#" alt="Logo Ritmos Latinos"/>
        </a>
        <nav className='navbar-nav'>
            <ul className='list-group list-group-horizontal'>
                <li>
                    <a href="#" className='navbar-text list-group-item'>Inicio</a>
                </li>
                <li>
                    <a href="#" className='navbar-text list-group-item'>Clientes</a>
                </li>
                <li>
                    <a href="#" className='navbar-text list-group-item'>Finanzas</a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header