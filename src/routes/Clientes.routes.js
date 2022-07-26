const express = require('express')
const router = express.Router()
const ClientesController =   require('../controllers/Clientes.controllers');
// Retrieve all employees
router.get('/', ClientesController.findAll);
// Create a new employee
router.post('/', ClientesController.create);
// Retrieve a single employee with id
router.get('/:id', ClientesController.findById);
// Update a employee with id
router.put('/:id', ClientesController.update);
// Delete a employee with id
router.delete('/:id', ClientesController.delete);
module.exports = router