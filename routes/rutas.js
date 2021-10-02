const{Router} = require('express')
const { model } = require('mongoose')
const rutas=Router()

rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('peticion de tipo get(para buscar)')
  })

rutas.get('/avanzada/v1/jugadores/id', function (req, res) {
    res.send('peticion de tipo get(para buscar un jugador)')
  })
 
rutas.post('/avanzada/v1/jugadores', function (req, res) {
    res.send('peticion de tipo post(para insertar) ')
  })

rutas.put('/avanzada/v1/jugadores/id', function (req, res) {
    res.send('peticion de tipo put(para actulizar)')
  })

rutas.delete('/avanzada/v1/jugadores/id', function (req, res) {
    res.send('peticion de tipo delete(para eliminar)')
  })

module.exports=rutas