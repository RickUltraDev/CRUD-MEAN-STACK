//Models
const Employee = require('../models/employee');


//Async Functions 
async function getEmployees(req, res) {
    const employees = await Employee.find();
    res.status(200).send({employees: employees});
}

function createEmployee(req, res) {
    res.send('crear empleados');
}

function getEmployee(req, res) {
    res.send('obtener empleado');
}

function editEmployee(req, res) {
    res.send('editar empleado');
}

function deleteEmployee(req, res) {
    res.send('eliminar empleados');
}



module.exports = {
    getEmployees,
    createEmployee,
    editEmployee,
    deleteEmployee,
    getEmployee
}


