import React,{ useState } from 'react'
import uniqid from 'uniqid'
import axios from 'axios'

export default function AgregarObra() {

    //Hooks
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [video, setVideo] = useState('');


    function agregarObra(){  
        var obra = {
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
            video: video,
            idobra:uniqid(),//nota mental: escribir las variables de ID en minuscula
        }

        console.log(obra)

        axios.post('/api/obra/agregarobra', obra) //nota mental: escribir las rutas en sigular
        .then(res => {
            alert(res.data)
        })
        .then(err =>{console.log(err)}) 

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
                    <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">Descripcion</label>
                    <textarea className='form-control'value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">Imagen</label>
                    <input type="file" className='form-control' value={imagen} onChange={(e) => {setImagen(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="video" className="form-label">Video</label>
                    <input type="file" className='form-control' value={video} onChange={(e) => {setVideo(e.target.value)}}/>
                </div>

                <buttom onClick={agregarObra} className="btn btn-success">Guardar obra</buttom>                  
            </div>
        </div>
    </div>
  )
}