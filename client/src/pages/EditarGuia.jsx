import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditarGuia() {
  const { id } = useParams();
  const [guia, setGuia] = useState({ nombre: '', descripcion: '', precio: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGuia = async () => {
      try {
        const response = await fetch('http://localhost:3000/servicios/id?id=');
        if (!response.ok) throw new Error('Error al obtener los datos de la guía');
        const datosGuia = await response.json();
        setGuia(datosGuia);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGuia();
  }, [id]);

  function cambiarCampo(e) {
    const { name, value } = e.target;
    setGuia({ ...guia, [name]: value });
  }

  function enviarFormulario(e) {
    e.preventDefault();
    const opciones = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(guia),
    };
    fetch('http://localhost:3000/servicios/', opciones)
      .then((res) => {
        if (!res.ok) throw new Error('Error al actualizar los datos de la guía');
        return res.json();
      })
      .then((data) => {
        if (data.mensaje === 'Ok') {
          navigate('/');
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <>
      <form action="#" method="post" onSubmit={enviarFormulario}>
        <label htmlFor="Nom">Actividad:  </label>
        <input
          type="text"
          name="nombre"
          id="Nom"
          value={guia.nombre}
          onChange={cambiarCampo}
        />{' '}
        <br />

        <label htmlFor="desc">Descripción de la actividad: </label>
        <textarea
          name="descripcion"
          id="desc"
          cols="30"
          rows="10"
          value={guia.descripcion}
          onChange={cambiarCampo}
        ></textarea>{' '}
        <br />

        <label htmlFor="pre">Precio:</label>
        <input
          type="number"
          name="precio"
          id="pre"
          value={guia.precio}
          onChange={cambiarCampo}
        />
        <br />
        <input type="submit" value="Guardar Cambios" className='botonCambio' />
      </form>
    </>
  );
}

export default EditarGuia;

