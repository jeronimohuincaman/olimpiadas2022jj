import React from 'react'
import MapaDisplay from '../components/MapaDisplay'
import NavBar from '../components/NavBar'
import './styles/Home.css'

export default  function Home() {

  return (
    <div className='home-container'>
        <div className='header-container'>
            <NavBar/>
        </div>
        <div className="contenido-container">
            <div className="mapa-museo">
                <MapaDisplay/>
            </div>
        </div>
        <div className="footer-container">
            aca iria el footer
        </div>
    </div>
  )
}