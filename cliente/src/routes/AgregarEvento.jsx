import React from 'react'

export default function AgregarEvento() {
    function agregarEvento(){

    }
  
    return (
    <div className='container'>
        <div className='row'>
            <h2 className="mt-4">Crear nuevo evento</h2>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="nombre-evento" className="form-label">Nombre</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="fecha-evento" className="form-label">Fecha</label>
                    <input type="date" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="hora-inicio" className="form-label">Hora de inicio</label>
                    <input type="time" className="form-control"/>
                </div>

                <buttom onClick={agregarEvento} className="btn btn-success">Guardar evento</buttom>                  
            </div>
        </div>
    </div>
  )
}
