const{Router} = require('express')

const rutas=Router()

const {registrarJugador}=require('../controllers/controlador.js')
const {buscarJugador}=require('../controllers/controlador.js')
const {buscarJugadores}=require('../controllers/controlador.js')
const {editarJugadores}=require('../controllers/controlador.js')
const {eliminarJugadores}=require('../controllers/controlador.js')

rutas.get('/avanzada/v1/jugadores',buscarJugadores)

rutas.get('/avanzada/v1/jugadores/:id',buscarJugador)
 
rutas.post('/avanzada/v1/jugadores',registrarJugador)

rutas.put('/avanzada/v1/jugadores/:id',editarJugadores)

rutas.delete('/avanzada/v1/jugadores/:id',eliminarJugadores)

module.exports=rutas