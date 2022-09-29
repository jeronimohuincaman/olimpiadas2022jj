import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function EditarObra() {

    const params = useParams()

      //Hooks
      const [nombre, setNombre] = useState('');
      const [descripcion, setDescripcion] = useState('');
      const [imagen, setImagen] = useState('');
      const [video, setVideo] = useState('');

      useEffect(() => {
        axios.post('/api/obra/obtenerdataobra', {idobra: params.idobra}).then(res => {
          console.log(res.data[0])
          const dataobra = res.data[0]
          setNombre(dataobra.nombre)
          setDescripcion(dataobra.descripcion)
          setImagen(dataobra.imagen)
          setVideo(dataobra.video)
        })
      }, [params.idobra])

      //funcion actualizar
      function editarObra(){
        //nuevo objeto para actualizar obra
        const actualizarobra = {
          nombre: nombre,
          descripcion: descripcion,
          imagen: imagen,
          video: video,
          idobra: params.idobra,
      }

      //hacer peticion usando axios
      axios.post('/api/obra/actualizarobra', actualizarobra) //nota mental: escribir las rutas en sigular
      .then(res => {
        console.log(res.data)
          alert(res.data)
      })
      .then(err =>{console.log(err)}) 

      }

  return (
    <div className='container'>
        <div className='row'>
            <h2 className="mt-4">Editar obra</h2>
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
                    <input type="filename" className='form-control' value={imagen} onChange={(e) => {setImagen(e.target.value)}}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="video" className="form-label">Video</label>
                    <input type="file" className='form-control' value={video} onChange={(e) => {setVideo(e.target.value)}}/>
                </div>

                <button onClick={editarObra} className="btn btn-success">Editar obra</button>                  
            </div>
        </div>
    </div>

  )
}

export default EditarObra