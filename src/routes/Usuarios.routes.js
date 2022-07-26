const express = require('express')
const router = express.Router()
const UsuariosController =   require('../controllers/Usuarios.controllers');
// Retrieve all employees
router.get('/', UsuariosController.findAll);
// Create a new employee
router.post('/', UsuariosController.create);
// Retrieve a single employee with id
router.get('/:id', UsuariosController.findById);
// Update a employee with id
router.put('/:id', UsuariosController.update);
// Delete a employee with id
router.delete('/:id', UsuariosController.delete);
module.exports = router