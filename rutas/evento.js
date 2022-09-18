const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const esquema = mongoose.Schema;

const esquemaEvento = new esquema({  //creamos el esquema que se guardara en mongoDB
    nombre: String,
    fecha: String,
    horaIni: String,
    idevento: String,

});

const ModeloEvento = mongoose.model('eventos', esquemaEvento) //creacion de modelo evento
module.exports = router;

//prueba
// router.get('/ejemplo' , (req,res) =>{
//     res.end('saludos desde ruta ejemplo')
// })

router.post('/agregarevento', (req, res) =>{
    const nuevoevento = new ModeloEvento({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        horaIni: req.body.horaIni,
    })

    //o tambien (!err ? res.send('Evento agregado correctamente'):res.send(err)) //operacion ternaria
    nuevoevento.save(function(err){
        if (!err){
            res.send('Evento agregado correctamente') 
        }else{
            res.send(err)
        }
    })
})