const secrets =   require( "../secrets")
const mongoose = require('mongoose')



mongoose.connect(secrets.url, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
module.exports = db 
    