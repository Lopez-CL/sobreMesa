const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/sobreMesa', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Established connection to MongoDB database!'))
.catch(err => console.log("Looks like there was an error when attempting to connect to the database",err));