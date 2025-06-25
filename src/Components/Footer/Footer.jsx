import React from 'react'

function Footer() {
  return (
    <footer className="text-lg-start border-top border-black mt-xl-5 pt-4">
      <div className="container p-4">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Sobre nosotros</h5>
            <ul className="list-unstyled mb-4">
              <li>
                <a href="#" className="text-black">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-black">Whatsapp</a>
              </li>
              <li>
                <a href="#" className="text-black">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-black">Twitter</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Ayuda</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-black">Contactos</a>
              </li>
              <li>
                <a href="#" className="text-black">Mail</a>
              </li>
              <li>

              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-4">Trabaja con nosotros</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-black">Whatsapp</a>
              </li>
            </ul>
          </div>
      </div>
    </div>
    <div className="text-center p-3 border-top border-black">
      © 2025 Copyright: Todos los derechos reservados
    </div>
  </footer>
  )
}

export default Footer