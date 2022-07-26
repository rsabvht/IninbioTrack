const express = require('express')
const router = express.Router()
const PersonalController =   require('../controllers/Personal.controllers');
// Retrieve all employees
router.get('/', PersonalController.findAll);
// Create a new employee
router.post('/', PersonalController.create);
// Retrieve a single employee with id
router.get('/:id', PersonalController.findById);
// Update a employee with id
router.put('/:id', PersonalController.update);
// Delete a employee with id
router.delete('/:id', PersonalController.delete);
module.exports = router