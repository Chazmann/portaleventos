
export const Publicacion = (publis) => {
    return (
        <div className="publi">
            <div className={publis.level}><img src={publis.rutaimg} /></div>
            <div className="datos_publi">
                <h5><i className="material-icons-outlined">place</i> {publis.lugar} - {publis.zona}</h5>
                <h3>{publis.nombre}</h3>
                <aside>
                    <img className="imgprev" src={publis.rutaimg} alt="" />
                </aside>
            </div>


        </div>
    )
}
