const express = require('express');

const usuariosController = require('../controller/usuariosController');

const router = express.Router();


router.get('/',usuariosController.getUsuarios)


module.exports = router;