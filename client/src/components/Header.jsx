import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
   <header className='header'>
   
    <div className='header__contendorLogo'>

    <h2 className='header__logo'>SOUMAYA</h2>

    </div>

   
    <nav className="header__navegacion">
        <ul className="header__lista">
            <li className="header__elementoLista"><Link to={'/'} className='header__link'>Inicio</Link></li>
            <li className="header__elementoLista"><Link to={'/servicios'} className='header__link'>Recorridos</Link></li>
            <li className="header__elementoLista"><Link to={'/panel'} className='header__link'>Login/Administrar</Link></li>
        </ul>
    </nav>

   </header>
  )
}

export default Header