//declaro un array con 4 posibles valores para el texto de un botón
const listaBotones = ['Cancelar' , 'Aceptar', 'Agustín', 'Sofía', 'Diosbal']
const nombre = 0

export const EjemploProps = () => {
  return (
    <>
    {listaBotones.map(boton => 
        <button>{boton}</button>)
        }
    </>
    
  )
}