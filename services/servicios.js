const JugadorModelo =  require('../Models/JugadorModelo.js')


async function insertarJugador(datosjugador){
    let jugadoraInsertar = new JugadorModelo(datosjugador)

    return await jugadoraInsertar.save()

}

module.exports= {insertarJugador}