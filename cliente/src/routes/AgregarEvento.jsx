import axios from 'axios';
import uniqid from 'uniqid'
import React, { useState } from 'react'

export default function AgregarEvento() {

    //Hooks
    const [nombre, setNombre] = useState(''); //creamos los hooks
    const [fecha, setFecha] = useState('');
    const [horaIni, setHoraIni] = useState('');


    function agregarEvento(){
        var evento = {
            nombre: nombre,
            fecha: fecha,
            horaIni: horaIni,
            idevento: uniqid(), //nota mental: escribir las variables de ID en minuscula
        }

        console.log(evento)

        axios.post('/api/evento/agregarevento', evento)
        .then(res => {
            alert(res.data)
        })
        .then(err =>{console.log(err)}) 
    }
  
    return (
    <div className='container'>
        <div className='row'>
            <h2 className="mt-4">Crear nuevo evento</h2>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label" >Nombre del evento</label> {/*A cada input le añadimos el hook para que se guarde y su set para que se refresque en caso de alguna modificacion */}
                    <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha" className="form-label" >Fecha</label>
                    <input type="date" className="form-control" value={fecha} onChange={(e) => {setFecha(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="hora-inicio" className="form-label" >Hora de inicio</label>
                    <input type="time" className="form-control" value={horaIni} onChange={(e) => {setHoraIni(e.target.value)}}/>
                </div>

                <buttom onClick={agregarEvento} className="btn btn-success" >Guardar evento</buttom>                  
            </div>
        </div>
    </div>
  )
}
