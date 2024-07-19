import React from 'react'
import { useEffect,useState } from 'react'

function Servicios() {

    const [guias,setGuias] = useState([])

    useEffect(()=>{

        fetch('http://localhost:3000/guias').then(res => res.json())
        .then(data => {
            setGuias(data)
        })

    },[])

  return (



    <section className='section__actividad'>
  {guias.map( guia => (
    <div key={guia.id_guia} className='section__actividadContenedor'>
      <h2 className='section__actividadTitulo'>{guia.nombre}</h2>
      <p className='section__actividadDescripcion'>{guia.descripcion}</p>
      <p className='section__actividadPrecio'>Precio por persona <br />{guia.precio}</p>
    </div>
  ))}
</section>


  )
}

export default Servicios