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
                <MapaDisplay/>
            </div>

            {/* <ListaObras/> */}
        </div>
        <div className="footer">
           <Footer/>
        </div>
    </div>
  )
}