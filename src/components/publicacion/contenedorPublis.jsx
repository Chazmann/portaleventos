import React from 'react'
import { Publicacion } from './Publicacion'
import publis from '../.././data/publicaciones.json'
import './publi.css'

export const ContenedorPublis = () => {

    const nivel = publis.categoria == 'premium' ? 'premium' : 'oculto'

  return (
    
    <aside className='container_Publis'>
        {publis.map(publi =>
    <Publicacion nivel={publi.categoria} rutaimg={publi.urlfotoportada} nombre={publi.nombre} zona={publi.zona} lugar={publi.localidad} />
    
    )}
    
    </aside>
  )
}
