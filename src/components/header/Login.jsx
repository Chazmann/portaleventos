import React from 'react'

const Login = (props) => {
    return (
        <div className='flex center lineheight'>
            <h6>{props.NombreUsuario}</h6>
            <h6 className='material-icons-outlined'>login</h6>
            
        </div>
    )
}

export default Login