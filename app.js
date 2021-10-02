// se trae el modelo del servidor
const servidorModelo=require('./Models/ServidorModelo.js')

//se trae el dotenv
require('dotenv').config()

//personalizar el servidor

const servidorJugadores = new servidorModelo()

//Encender el servidor

servidorJugadores.encenderServidor()



 

