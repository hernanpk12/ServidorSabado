const JugadorModelo =  require('../Models/JugadorModelo.js')


async function insertarJugador(datosjugador){
    let jugadoraInsertar = new JugadorModelo(datosjugador)

    return await jugadoraInsertar.save()

}

async function leerJugador(id){

   let jugador = await JugadorModelo.findById(id)
   return jugador

}

async function leerJugadores(){
    let jugadores = await JugadorModelo.find()
    return jugadores
}

async function editarJugador(id,datos){

    return await JugadorModelo.findByIdAndUpdate(id,datos)

}

async function eliminarJugador(id){
    return await JugadorModelo.findByIdAndRemove(id)
}

module.exports= {insertarJugador,leerJugador,leerJugadores,editarJugador,eliminarJugador}