import './trendpromo.css'
import camperaJean from '../.././assets/imgs/ropa/campera.jpg'
import ropa from '../../data/pilcha.json'

let preciof = ropa[0].precio - (ropa[0].precio * (ropa[0].descuento / 100))


export const TrendPromo = () => {
    return (
    <>
        <div className="sliderPromo">

            <div className="promo1">
                <img src={ropa[0].url} alt="" className="imgpromo"/>
                <div className="detallepromo">
                    <h4 className='op40'>Recomendaciones</h4>
                    <h1>{ropa[0].nombre}</h1>
                    <span className="price">$ {preciof} </span>
                    <span className="oldprice">${ropa[0].precio}</span>
                </div>
            </div>
            

        </div>
        <center>tres puntitos</center>
    </>
    )
}
