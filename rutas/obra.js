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
        idobra:req.body.idobra,
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

//obtener data de obra
router.post('/obtenerdataobra', (req, res) => {
    ModeloObra.find({idobra:req.body.idobra}, function(docs,err){
        if (!err){
            res.send(docs) 
        }else{
            res.send(err)
        }
    })
})

//actualizar obra
router.post('/actualizarobra', (req, res) => {
    ModeloObra.findOneAndUpdate({idobra:req.body.idobra}, {
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        video: req.body.video,
        idobra: req.body.idobra
    }, (err) => {
        if(!err){
            res.send('Obra actualizado correctamente')
        }else{
            res.send(err)
        }
    })
})

//eliminar obra
router.post('/borrarobra', (req, res) => {
    ModeloObra.findOneAndDelete({idobra:req.body.idobra}, (err) => {
        if(!err){
            res.send('Obra borrada correctamente')
        }else{
            res.send(err)
        }
    })
})