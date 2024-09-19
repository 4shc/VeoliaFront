import React from 'react';
import '../../styles/Header.css'
import iconCapsule from '../img/iconCapsule.webp'
import Login from '../Login';

const Header = () => {
  return (
    <>
      <nav className="navBar">
        <div className="navBar_container">
          <img className="img logo-capsule" src={iconCapsule} alt="" />
        </div>
        <input type="checkbox" id="nav__checkbox" className="nav__checkbox" />
        <label htmlFor="nav__checkbox" className="nav__toggle">
        {/* icono Menu */}
        <svg className='menu' xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1">
        <circle style={{ opacity: 1, fill: '#ffd616' }} cx="16" cy="17" r="14"/>
        <circle style={{ fill: '#2c2c2c' }} cx="16" cy="16" r="14"/>
        <g style={{ opacity: 0.2 }} transform="translate(0,1)">
          <path d="m 16,6 c -2.2096,0 -4,1.7912 -4,4 0,2.2088 1.7904,4 4,4 2.2096,0 4,-1.7912 4,-4 0,-2.2088 -1.7904,-4 -4,-4 z"/>
          <path d="m 16,16.000001 c -6.9993,0.0042 -7,4.430769 -7,4.430769 v 1.8 c 0,0 1.292299,2.76923 7,2.76923 5.707701,0 7,-2.76923 7,-2.76923 v -1.8 c 0,0 0,-4.433538 -6.9986,-4.430769 z"/>
        </g>
        <g>
          <path style={{ fill: '#ffd616' }} d="m 16,6 c -2.2096,0 -4,1.7912 -4,4 0,2.2088 1.7904,4 4,4 2.2096,0 4,-1.7912 4,-4 0,-2.2088 -1.7904,-4 -4,-4 z"/>
          <path style={{ fill: '#ffd616' }} d="m 16,16.000001 c -6.9993,0.0042 -7,4.430769 -7,4.430769 v 1.8 c 0,0 1.292299,2.76923 7,2.76923 5.707701,0 7,-2.76923 7,-2.76923 v -1.8 c 0,0 0,-4.433538 -6.9986,-4.430769 z"/>
        </g><path style={{ fill: '#ffd616', opacity: 1 }} d="M 16 2 A 14 14 0 0 0 2 16 A 14 14 0 0 0 2.0214844 16.585938 A 14 14 0 0 1 16 3 A 14 14 0 0 1 29.978516 16.414062 A 14 14 0 0 0 30 16 A 14 14 0 0 0 16 2 z"/>
        </svg>

        {/* icono Cerrar */}
        <svg className="close" viewBox="0 0 24 24" width="100" title="times">
          <path d="M16,8a1,1,0,0,0-1.414,0L12,10.586,9.414,8A1,1,0,0,0,8,9.414L10.586,12,8,14.586A1,1,0,0,0,9.414,16L12,13.414,14.586,16A1,1,0,0,0,16,14.586L13.414,12,16,9.414A1,1,0,0,0,16,8Z" />
          <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
        </svg>
        </label>
        


        {/* NAVBAR */}
        <ul className="navBarContetUno linkMenus">
          <li>
            <div className="linkPush"><span className="icon-home3"></span><Login/></div></li>
            <li><a href="#"><span className="icon-bubbles3"></span>User name</a></li>
            <li><a href="#"><span className="icon-bubbles3"></span>User</a></li>
        </ul>

        <div className="navBarContetDos">
          <a href="" title="Pagos" className="linkPagos"><span className="icon-credit"></span></a>
          <span title="Ingreso"></span>
        </div>
      </nav>
    </>
  )
}

export default Header;
