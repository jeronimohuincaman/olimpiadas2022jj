const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaObra = new esquema({
    nombre: String,
    descripcion: String,
    urlImagen: String,
    urlVideo: String,
    idObra: String,
});

const ModeloObra = mongoose.model('obras', esquemaObra)
module.exports = router;

router.get('/ejemplo' , (req,res) =>{
    res.end('saludos desde ruta ejemplo')
})
