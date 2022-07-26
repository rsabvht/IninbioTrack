const express = require('express')
const router = express.Router()
const PreciosProductosController =   require('../controllers/PreciosProductos.controllers');
// Retrieve all employees
router.get('/', PreciosProductosController.findAll);
// Create a new employee
router.post('/', PreciosProductosController.create);
// Retrieve a single employee with id
router.get('/:id', PreciosProductosController.findById);
// Update a employee with id
router.put('/:id', PreciosProductosController.update);
// Delete a employee with id
// router.delete('/:id', PreciosProductosController.delete);
module.exports = router