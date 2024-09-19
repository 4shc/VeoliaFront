import React from 'react';
import iconUser from '../img/iconUser.png';
import iconCapsule from '../img/iconCapsule.webp'

const HeaderUser = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navBar_container">
          <img className="img logo-capsule" src={iconCapsule} alt="" />
          </div>
        <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
        <label htmlFor="nav__checkbox" className="nav__toggle">
        {/* icono Menu */}
        <img className='iconUser menu' src={iconUser} alt="" />

        {/* icono Cerrar */}
        <svg className="close" viewBox="0 0 24 24" width="100" title="times">
          <path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
          <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
        </svg>
        </label>
        


        {/* NAVBAR */}
        <ul className="navBarContetUno linkMenus">
          <li>
            <div className="linkPush"><span className="icon-home3"></span>Peril</div></li>
            <li><a href="#"><span className="icon-bubbles3"></span>Mis Sensores</a></li>
            <li><a href="#"><span className="icon-bubbles3"></span>Administrar cuenta</a></li>
        </ul>

        <div className="navBarContetDos">
          <a href="" title="Pagos" className="linkPagos"><span className="icon-credit"></span></a>
          <span title="Ingreso">Salir</span>
        </div>
      </nav>
    </>
  )
}

export default HeaderUser;
