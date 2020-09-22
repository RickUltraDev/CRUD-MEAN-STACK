//Models
const Employee = require('../models/employee');


//Async Functions 
async function getEmployees(req, res) {
    const employees = await Employee.find();

    res.status(200).send({employees: employees});
}

async function createEmployee(req, res) {
    //it receives a json with all attributes employee needs
    var newEmployee = new Employee(req.body);

    await newEmployee.save();

    res.status(200).send({message: 'employee created' });
}

async function getEmployee(req, res) {
    var employee = await Employee.findById(req.params.id);
    res.status(200).send({employee: employee});
}

function editEmployee(req, res) {
    res.send('editar empleado');
}

async function deleteEmployee(req, res) {
    var employee = await Employee.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Employee deleted'});

    //Min 55 del video
}



module.exports = {
    getEmployees,
    createEmployee,
    editEmployee,
    deleteEmployee,
    getEmployee
}


