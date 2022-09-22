const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaObra = new esquema({ 
    nombre: String,
    descripcion: String,
    imagen: String,
    video: String,
    idobra: String,
});

const ModeloObra = mongoose.model('obras', esquemaObra) //creacion de modelo obra
module.exports = router;

//prueba
// router.get('/ejemplo' , (req,res) =>{
//     res.end('saludos desde ruta ejemplo')
// })

//agregar obra
router.post('/agregarobra', (req, res) =>{
    const nuevaobra = new ModeloObra({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        video:req.body.video,
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


//obtener todos las obras
router.get('/obtenerobras', (req, res) => {
    ModeloObra.find({}, function(docs,err){
        if (!err){
            res.send(docs) 
        }else{
            res.send(err)
        }
    })
})