const express = require('express')
const router = express.Router()
const OrdenCompraController =   require('../controllers/OrdenCompra.controllers');
// Retrieve all employees
router.get('/', OrdenCompraController.findAll);
// Create a new employee
router.post('/', OrdenCompraController.create);
// Retrieve a single employee with id
router.get('/:id', OrdenCompraController.findById);
// Update a employee with id
router.put('/:id', OrdenCompraController.update);
// Delete a employee with id
router.delete('/:id', OrdenCompraController.delete);
module.exports = router