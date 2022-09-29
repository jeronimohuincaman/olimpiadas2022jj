import React from 'react'
import { Footer } from '../components/Footer'
// import ListaObras from '../components/ListaObras'
import MapaDisplay from '../components/MapaDisplay'
import NavBar from '../components/NavBar'
import './styles/Home.css'

export default  function Home() {

  return (
    <div className='home-container'>
        <div className='header'>
            <NavBar/>
        </div>
        <div className="contenido">
            <div className="mapa-museo">
              <h1>Nuestro museo</h1>
                <MapaDisplay/>
            </div>

            {/* <ListaObras/> */}

            <div className="reacciones">
              <button className="btn btn-success"> Conforme :)</button>
              <button className="btn btn-warning"> Regular :|</button>
              <button className="btn btn-danger"> Decepcionado :(</button>
            </div>
        </div>
        <div className="footer">
           <Footer/>
        </div>
    </div>
  )
}