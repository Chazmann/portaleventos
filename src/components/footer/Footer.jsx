import React from 'react'
import '../../estilosgenerales.css'
import './footer.css'
import logoPortal from '../header/imgs/logoportal.png'
import algo from '../.././assets/imgs/quintas/janos.jpeg'

const PiePagina = () => {
    return (
        <div className='footer blanco'>
            <div className="col50"><img src={algo} />
                <div className="col100 flex">
                    <div className="col50">
                        <ul className='lista__columna'>
                            <li>Categorías</li>
                            <li>Salones</li>
                            <li>Imagen Personal</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                    <div className="col50">
                        <ul className='lista__columna'>
                            <li>Avisos Legales</li>
                            <li>Términos y condiciones</li>
                            <li>Trabajá con nosotros</li>
                            <li>Anunciá en el Portal</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col50 oro60">fdasdfasfd</div>
        </div>
    )
}

export default PiePagina

