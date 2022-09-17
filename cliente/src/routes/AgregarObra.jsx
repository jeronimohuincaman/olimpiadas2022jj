import React from 'react'

export default function AgregarObra() {
    function agregarObra(){
        
    }
  return (
    <div className='container'>
        <div className='row'>
            <h2 className="mt-4">Crear nueva obra</h2>
        </div>

        <div className="row">
            <div className="col-sm-6 offset-3">
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <textarea className='form-control'></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input type="file" />
                </div>
                <div className="mb-3">
                    <label htmlFor="video" className="form-label">Video</label>
                    <input type="file" />
                </div>

                <buttom onClick={agregarObra} className="btn btn-success">Guardar obra</buttom>                  
            </div>
        </div>
    </div>
  )
}