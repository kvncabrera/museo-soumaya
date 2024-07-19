
import React, { useEffect, useState } from 'react';
import { FaRegPlusSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";

function PanelDeControl() {
  const [guias, setGuias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/guias')
      .then(res => res.json())
      .then(datos => {
        setGuias(datos);
      });
  }, []);

  return (
    <>
      {guias.map(guia => (
        <div key={guia.id_guia} className="guiaContenedor">
          <h2 className="guiaTitulo">Actividad: {guia.nombre}</h2>
          <p className="guiaPrecio"> Precio: {guia.precio}</p>

          <Link to={'/borrarGuia/' + guia.id_guia} className="guiaLink">
            <p>Eliminar</p><FaTrashAlt />
          </Link>

          <Link to={'/editarGuia/' + guia.id_guia} className="guiaLink">
            <p>Actualizar</p><GrUpdate />
          </Link>
        </div>
      ))}

      <div className='nuevaGuia__contenedor'>
        <p className="nuevaGuia">
          Añadir nueva actividad  
          <Link to={'/nuevaGuia'}>
            <FaRegPlusSquare />
          </Link>
        </p>
      </div>
    </>
  );
};

export default PanelDeControl;
