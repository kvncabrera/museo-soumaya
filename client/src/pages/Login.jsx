import React from 'react'
import { useState } from 'react'
import { UseUser } from '../context/UsuarioContext';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [datosFormulario,setDatosFormulario] = useState({nombre:'',contrasena:'',error:''});

  const navegador = useNavigate();

  const {login} = UseUser();

  function handleSubmit(e) {
    
    e.preventDefault();
    fetch('http://localhost:3000/usuarios?nombre='+datosFormulario.nombre+'&contrasena='+datosFormulario.contrasena)
    .then(res => res.json()).then(data =>{
      if (data.mensaje == 'Usuario no encontrado') {
      setDatosFormulario({...datosFormulario,error:'Usuario o contraseña incorrectos'})
      }else{

        login(data)
        navegador('/')
      }
    })

  }

  function handleCambio(e) {
    
    let valor = e.target.value;
    let nombreCampo = e.target.name;

    setDatosFormulario({...datosFormulario,[nombreCampo]:valor})

  }

  return (
    <>
      <form action="#" method="get" onSubmit={handleSubmit}>
        <p>{datosFormulario.error}</p>
        <label htmlFor="nom">Nombre de Usuario: </label>
        <input type="text" name="nombre" id="nom" onChange={handleCambio}/> <br />

        <label htmlFor="pass">Contraseña: </label>
        <input type="password" name="contrasena" id="pass"  onChange={handleCambio}/>

      <br />

      <input type="submit" value="Iniciar Sesion" />

      </form>
    </>
  )
}

export default Login