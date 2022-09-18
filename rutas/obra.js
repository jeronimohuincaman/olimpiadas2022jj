const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaObra = new esquema({ 
    nombre: String,
    descripcion: String,
    urlImagen: String,
    urlVideo: String,
    idobra: String,
});

const ModeloObra = mongoose.model('obras', esquemaObra) //creacion de modelo obra
module.exports = router;

//prueba
// router.get('/ejemplo' , (req,res) =>{
//     res.end('saludos desde ruta ejemplo')
// })

router.post('/agregarobra', (req, res) =>{
    const nuevaobra = new ModeloObra({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.urlImagen,
        video:req.body.urlVideo,
    })

    //o tambien (!err ? res.send('obra agregada correctamente'):res.send(err)) //operacion ternaria
    nuevaobra.save(function(err){
        if (!err){
            res.send('Obra agragada correctamente') 
        }else{
            res.send(err)
        }
    })
})