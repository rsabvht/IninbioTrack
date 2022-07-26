const express = require('express')
const router = express.Router()
const DireccionesEntregaController =   require('../controllers/DireccionesEntrega.controllers');
// Retrieve all employees
router.get('/', DireccionesEntregaController.findAll);
// Create a new employee
router.post('/', DireccionesEntregaController.create);
// Retrieve a single employee with id
router.get('/:id', DireccionesEntregaController.findById);
// Update a employee with id
router.put('/:id', DireccionesEntregaController.update);
// Delete a employee with id
router.delete('/:id', DireccionesEntregaController.delete);
module.exports = router