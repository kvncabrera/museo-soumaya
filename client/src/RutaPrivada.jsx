import React from 'react'
import { UseUser } from './context/UsuarioContext'
import { Navigate } from 'react-router-dom'

function RutaPrivada( {componentePintar} ) {

    const {usuario} = UseUser();

  return (
    
    <>
    
        {usuario == null ?
        
            <Navigate to={'/login'}/>
            
            :

            componentePintar

    }

    
    </>

  )
}

export default RutaPrivada