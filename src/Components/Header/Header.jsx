import React from "react";

import logo from "../../assets/imgs/logo.jpg";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg d-flex justify-content-between px-5 py-3 border-bottom border-dark-subtle">
        <a
          className="navbar-brand d-flex align-items-center gap-3 fs-3 fw-bold"
          href="#"
        >
          <img
            src={logo}
            alt="Logo"
            width="70"
            height="70"
            className="border border-black rounded-circle"
          />
          Fitness Gym
        </a>
        <ul className="navbar-nav fs-5">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Clientes
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Finanzas
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
