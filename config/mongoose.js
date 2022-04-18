const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_list');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'error connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})
module.exports = db;