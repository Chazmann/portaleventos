import { PPubliCacion } from "./PPubliCacion"

export const ContPubli = () => {
  return (
    <div className="contenedor_publicaciones">
         <PPubliCacion localidad={'Tortuguitas'} zona={'Gba Norte'}/>
         <PPubliCacion localidad={'Del Viso'} zona={'Gba Norte'}/>
    </div>
  )
}
