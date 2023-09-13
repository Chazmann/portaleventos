//import './App.css'
import PiePagina from './components/footer/Footer'
import Encabezado from './components/header/header'
import { ContenedorPublis } from './components/publicacion/contenedorPublis'
import { EjemploProps } from './components/EjemploProps'

export const App = () => {
  return (
    <>
    <Encabezado />
    <ContenedorPublis />
    <EjemploProps />
    <PiePagina />
    <EjemploProps />
  </>
  )
}

// function App() {

//   return (
//     <>
//       <Encabezado />
//       <ContenedorPublis />
//       <EjemploProps />
//       <PiePagina />
//     </>
//   )
// }

//export default App



