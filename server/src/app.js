//Libraries
const express = require('express');
const morgan = require('morgan');
const app = express();
require('./database');


//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Envioment variables
app.set('port', process.env.port || 3000);

//Routes
//it's a prefix for add to route
app.use("/api/employee",require('./routes/employeesRoutes'));


//Start server
app.listen(app.get('port'));
console.log("Server on port", app.get('port'));