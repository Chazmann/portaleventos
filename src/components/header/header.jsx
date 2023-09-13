import React from 'react'
import MenuEnlaces from './MenuEnlaces'
import '../../estilosgenerales.css'
import './header.css'
import Login from './Login'
import logoPortal from './imgs/logoportal.png'

const Encabezado = () => {
    return (
        <div className='header'>
            <img src={logoPortal} alt="" className='' />
            <MenuEnlaces />
            <Login NombreUsuario={'Alguien'}/>

        </div>
    )
}

export default Encabezado

//  pelaokhe