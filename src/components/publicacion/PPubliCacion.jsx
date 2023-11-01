import './publi1.css'
// const localidad = 'Algun lugar'
// const zona = 'Gba Norte'

export const PPubliCacion = (datospublicacion) => {
  return (
    <div className="publi">
        <div className="datos_publi">
            <div className="mi_zona">
                <i className="material-icons-outlined">place</i>
                {datospublicacion.localidad}
                {datospublicacion.zona}
            </div>
        </div>
        <div className="imagen"></div>
    </div>
    
  )
}
