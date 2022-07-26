const express = require('express')
const router = express.Router()
const DetallesODCController =   require('../controllers/DetallesODC.controllers');
// Retrieve all employees
router.get('/', DetallesODCController.findAll);
// Create a new employee
router.post('/', DetallesODCController.create);
// Retrieve a single employee with id
router.get('/:id', DetallesODCController.findById);
// Update a employee with id
router.put('/:id', DetallesODCController.update);
// Delete a employee with id
router.delete('/:id', DetallesODCController.delete);
module.exports = router