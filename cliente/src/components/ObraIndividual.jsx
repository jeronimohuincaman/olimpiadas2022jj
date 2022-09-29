import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'

export default function ObraIndividual({obra}) {
  //Funcion borrar
  function borrarobra(idobra){
    axios.post('/api/obra/borrarobra', {idobra:idobra}).then(res => {
      console.log(res.data)
      alert(res.data)
    }).catch(err => {
      console.log(err)
    })
  }
  
  return (
    <div className="container">
        <div className="row">

            <div className="col-sm-6 offset-3">
                
            <ul className='list-group'>
                <li className="list-group-item">{obra.idobra}</li>
                <li className="list-group-item">{obra.nombre}</li>
                <li className="list-group-item">{obra.descripcion}</li>
                <li className="list-group-item">{obra.imagen}</li>
                <li className="list-group-item">{obra.video}</li>
            </ul>

            <Link to={`/editarobra/${obra.idobra}`}><li className='btn btn-success'>Editar</li></Link>
            <button className='btn btn-danger' onClick={() => {borrarobra(obra.idobra)}}>Borrar</button>
            <hr className='mt-4'></hr>
            </div>

        </div>
    </div>
  )
}

