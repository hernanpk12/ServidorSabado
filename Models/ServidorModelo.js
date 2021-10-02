const express = require('express')

//importar conexion

const{conectarBD}=require('../database/conexion.js')

const rutas=require('../routes/rutas.js')

class ServidorModelo{
    
    constructor(){
        this.app = express()
        this.conectarConBD()
        this.enrutarPeticiones()

    }




    encenderServidor(){    
     this.app.listen(process.env.PUERTO,function(){
    console.log("servidor encendido" + process.env.PUERTO);
    })

    }

    enrutarPeticiones(){
          this.app.use('/',rutas)
    }

    conectarConBD(){
      conectarBD();

    }


}

module.exports=ServidorModelo