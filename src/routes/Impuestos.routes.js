const express = require('express')
const router = express.Router()
const ImpuestosController =   require('../controllers/Impuestos.controllers');
// Retrieve all employees
router.get('/', ImpuestosController.findAll);
// Create a new employee
router.post('/', ImpuestosController.create);
// Retrieve a single employee with id
router.get('/:id', ImpuestosController.findById);
// Update a employee with id
router.put('/:id', ImpuestosController.update);
// Delete a employee with id
router.delete('/:id', ImpuestosController.delete);
module.exports = router