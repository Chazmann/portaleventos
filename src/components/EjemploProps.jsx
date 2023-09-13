//declaro un array con 4 posibles valores para el texto de un botón
const listaBotones = ['Confirmar', 'Cerrar', 'Aceptar', 'Guardar']

export const EjemploProps = () => {
  return (
    <>
    {listaBotones.map(boton => 
        <button>{boton}</button>)
        }
    </>
    
  )
}
