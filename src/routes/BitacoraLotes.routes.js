const express = require('express')
const router = express.Router()
const BitacoraLotesController =   require('../controllers/BitacoraLotes.controllers');
// Retrieve all employees
router.get('/', BitacoraLotesController.findAll);
// Create a new employee
router.post('/', BitacoraLotesController.create);
// Retrieve a single employee with id
router.get('/:id', BitacoraLotesController.findById);
// Update a employee with id
router.put('/:id', BitacoraLotesController.update);
// Delete a employee with id
// router.delete('/:id', BitacoraLotesController.delete);
module.exports = router