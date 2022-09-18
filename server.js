const express = require('express')
const app = express()

//importar conexion mongoDB
const archivoBD = require('./conexion')

//importacion del archivo de rutas y modelos obras y eventos
const rutaObra = require('./rutas/obra')
const rutaEvento = require('./rutas/evento')

//importar body parser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

//usamos las rutas
app.use('/api/obra', rutaObra)
app.use('/api/evento', rutaEvento)

app.get('/',(req,res) => {
    res.end('bienvenidos al servidor backend Node.js. Corriendo...')
})

//configurar server basico
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})