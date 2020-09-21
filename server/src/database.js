const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/employeescrud', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
.then((db)=> console.log('DB Connected'))
.catch((err)=> console.log(err));