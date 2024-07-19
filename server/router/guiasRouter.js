const express = require('express');

const guiasController = require('../controller/guiasController');


const router = express.Router();

router.get('/',guiasController.getGuias);
router.post('/',guiasController.createGuias);
router.delete('/',guiasController.deleteGuias);
router.put('/',guiasController.updateGuias);

// Se han definido las rutas Express Js asociadas a diferentes metodos GET, POST, DELETE, PUT

module.exports = router;