import React from 'react'
import { FaFacebook,FaTiktok,FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


function Footer() {
  return (
    <footer className='footer'>
        <div className='footer__rrss'>
        <FaFacebook className='footer__red'/>
        <IoLogoWhatsapp className='footer__red'/>
        <FaInstagram className='footer__red'/>
        </div>

        <p className='footer__texto'>&copy; Todos los derechos reservados</p>

    </footer>
  )
}

export default Footer