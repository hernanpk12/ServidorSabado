const {request, response} = require('express')

// importar servicio
const {insertarJugador} = require('../services/servicios.js')


async function registrarJugador(peticion=request,respuesta=response){

    let datosCliente=peticion.body;

    try{
     await insertarJugador(datosCliente)
     respuesta.status(200).json({
         estado:true,
         mensaje:"exito al registrar el jugador"
     }
     )
    }
    catch(error){
        respuesta.status(400).json({
            estado:false,
            mensaje:"upss...."+error
        }
        )

    }

}


function buscarJugador(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando un jugador"
        }
    )
}

function buscarJugadores(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy buscando todos los jugador"
        }
    )
}

function eliminarJugadores(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy eliminando un jugador"
        }
    )
}

function editarJugadores(peticion=request,respuesta=response){
    respuesta.json(
        {
            estado:true,
            mensaje:"estoy editando un jugador"
        }
    )
}

module.exports={
    registrarJugador,
    editarJugadores,
    eliminarJugadores,
    buscarJugador,
    buscarJugadores
}
