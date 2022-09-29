import React from 'react'
import { Footer } from '../components/Footer'
import NavBar from '../components/NavBar'
 import './styles/Agenda.css'

export default function Agenda() {
  return (
    <div className='container'>
        <div className='header'>
           <NavBar/>
        </div>
        <div className="contenido">
            <h1>Agenda</h1>
            <div className="cuadrado">
                  Hola, acá iría el calendario.
            </div>
            
            <button className='btn btn-success'>Reservar</button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima accusantium quaerat quidem possimus error ex provident suscipit perferendis ut dicta! Excepturi nam ipsam vitae hic possimus doloribus distinctio odit corrupti, voluptate dolore maiores obcaecati commodi repudiandae iure tempore itaque nemo voluptatibus debitis ad eius. Quas dicta quasi, corrupti nobis optio distinctio fugit consequuntur quo perspiciatis a unde eaque, minus quaerat tempora odit at, et possimus. Illo minima, et esse non unde doloremque, rerum quasi placeat quo saepe distinctio vel asperiores labore cupiditate id, exercitationem provident porro? Vel est ut, enim, necessitatibus eveniet error, veniam commodi molestias architecto fuga quos delectus.</p>

        </div>
        <div className="footer">
            <Footer/>
        </div>
    </div>
  )
}
