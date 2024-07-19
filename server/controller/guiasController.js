const conexion = require('../database');


const guiasController = {

    getGuias(req,res){
        
        let comando = 'SELECT * FROM guias';

        conexion.query( comando , (err,resultados,campos)=>{

            if (err) {
                res.json({mensaje: 'Error en la consulta: '}+err).status(503);
            }

            res.json(resultados).status(200);

        })

    },

    createGuias(req,res){

        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let precio = parseInt(req.body.precio);

        // let {nombre,descripcion} = req.body;
        // let {precio} = parseInt(req.body)

        let query = "INSERT INTO guias(nombre,descripcion,precio) VALUES (?,?,?)"

        conexion.query(query,[nombre,descripcion,precio],(err,resultados,campos)=>{
            if (err) {
                res.json({mensaje: 'Error en la insercion'}).status(503)
            }
            res.json({mensaje: 'Ok'}).status(200);
        })

    },

    deleteGuias(req,res){
       
        let id = req.query.id;

        let comando = "DELETE FROM guias WHERE id_guia = ?";

        conexion.query(comando,[id],(err,resultados,campos)=>{
            if (err) {
                res.json({mensaje: 'Error en el borrado'}).status(503)
            }
            res.json({mensajes:'Ok'}).status(200);
        })

    },

    updateGuias(req, res) {
        const id = req.params.id; 
        const { nombre, descripcion, precio } = req.body; 
    

        const comando = "UPDATE guias SET nombre = ?, descripcion = ?, precio = ? WHERE id_guia = ?";
    
        conexion.query(comando, [nombre, descripcion, precio, id], (err, resultados, campos) => {
            if (err) {
                return res.status(503).json({ mensaje: 'Error en la actualización' });
            }
            res.status(200).json({ mensaje: 'Ok' });
        });
    }
    
// Estas funciones están diseñadas para realizar las operaciones CRUD (Crear, Leer, Actualizar y Borrar) en la base de datos MySQL. 



}


module.exports = guiasController;