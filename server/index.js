const express = require('express');
const cors = require('cors');
const bunyan = require('bunyan');
const guiasRouter = require('./router/guiasRouter');
const usuariosRouter = require('./router/usuariosRouter');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use(express.json());
app.use(express.urlencoded({extended:true}))

const logger = bunyan.createLogger({name: 'Proyecto museo'});



app.use('/guias',guiasRouter);
app.use('/usuarios',usuariosRouter);



app.use((req,res)=>{
    res.status(404).json({mensaje: 'No se ha encontrado la ruta'})
})

app.use( (err,req,res,next)=>{
    res.status(500).json({mensaje: err})
} )





app.put('/servicios/:id', (req, res) => {
    const id = req.params.id;
    const { nombre, descripcion, precio } = req.body;

    const comando = "UPDATE servicios SET nombre = ?, descripcion = ?, precio = ? WHERE id_servicio = ?";

    conexion.query(comando, [nombre, descripcion, precio, id], (err, resultados, campos) => {
        if (err) {
            return res.status(503).json({ mensaje: 'Error en la actualización' });
        }
        res.status(200).json({ mensaje: 'Ok' });
    });
});







app.listen(3000, ()=>{

    logger.info('Servidor de express levantados')

})