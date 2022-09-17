const express = require('express')
const app = express()

//importar conexion mongoDB
const archivoBD = require('./conexion')

//importacion del archivo de rutas y modelo obras
const rutaObra = require('./rutas/obra')

app.use('/api/obra', rutaObra)

app.get('/',(req,res) => {
    res.end('bienvenidos al servidor backend Node.js. Corriendo...')
})

//configurar server basico
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})