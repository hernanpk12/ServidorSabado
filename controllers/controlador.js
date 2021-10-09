const {request, response} = require('express')


function registrarJugador(peticion=request,respuesta=response){

    respuesta.json(
        {
            estado:true,
            mensaje:"estoy registrando un jugador"
        }
    )


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
