const {request, response} = require('express')

// importar servicio
const {insertarJugador} = require('../services/servicios.js')
const {leerJugador}= require('../services/servicios.js')
const {leerJugadores}= require('../services/servicios.js')
const {editarJugador}= require('../services/servicios.js')
const {eliminarJugador}= require('../services/servicios.js')


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


 async function buscarJugador(peticion=request,respuesta=response){
  let id = peticion.params.id
  try{
  let jugador =  await leerJugador(id)
    respuesta.status(200).json({
        estado:true,
        datos:jugador
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

async  function buscarJugadores(peticion=request,respuesta=response){
    try{
        let jugadores =  await leerJugadores()
          respuesta.status(200).json({
              estado:true,
              datos:jugadores
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

async function eliminarJugadores(peticion=request,respuesta=response){
  let id = peticion.params.id

  try{
    await eliminarJugador(id)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al eliminar el jugador"
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

async function editarJugadores(peticion=request,respuesta=response){
   let datos = peticion.body
   let id = peticion.params.id
   
   try{
    await editarJugador(id,datos)
    respuesta.status(200).json({
        estado:true,
        mensaje:"exito al editar el jugador"
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

module.exports={
    registrarJugador,
    editarJugadores,
    eliminarJugadores,
    buscarJugador,
    buscarJugadores
}
