const conexion = require('../database');

const usuariosController = {

    getUsuarios(req,res){

        let usuario = req.query.nombre;

        let contra = req.query.contrasena;

        const busqueda = "SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?";

        conexion.query( busqueda, [usuario,contra] , (err,resultados,campos)=>{

           if (resultados.length == 0) {
             
                res.json({mensaje: 'Usuario no encontrado'}).status(403)
 
           } else{

                res.json(resultados[0]).status(200);

           }

        })

    }

}

module.exports = usuariosController;