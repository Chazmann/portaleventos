import './buscador.css'
export const Buscador = () => {
    return (
        <div className="buscador">
            <input type="submit" value="search" className="material-icons-outlined" />
            
            <input type="search" placeholder="Qué estás buscando hoy?" />
        </div>
    )
}
