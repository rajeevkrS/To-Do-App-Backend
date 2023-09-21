// required mongoose 
const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://rajeevkrs:rajeevkr.450@cluster0.xigfak7.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

// connected to the db
// mongoose.connect('mongodb://127.0.0.1/todolist_db');

// acquired connection to db
const db=mongoose.connection;

//error
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));

//up and running then print the message
db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;