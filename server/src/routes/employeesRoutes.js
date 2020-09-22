//Libraries with middleware
const { Router } = require('express');
const app = Router();

//Controllers
const employeeController = require('../controllers/employeesController');


//Routes
app.get('/', employeeController.getEmployees);
app.post('/', employeeController.createEmployee);
app.get('/:id', employeeController.getEmployee);
app.put('/:id', employeeController.editEmployee);
app.delete('/:id', employeeController.deleteEmployee);


module.exports = app;