const express = require('express')
const router = express.Router()
const ProductosController =   require('../controllers/Productos.controllers');
// Retrieve all employees
router.get('/', ProductosController.findAll);
// Create a new employee
router.post('/', ProductosController.create);
// Retrieve a single employee with id
router.get('/:id', ProductosController.findById);
// Update a employee with id
router.put('/:id', ProductosController.update);
// Delete a employee with id
router.delete('/:id', ProductosController.delete);
module.exports = router