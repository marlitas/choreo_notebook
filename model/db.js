var mongoose = require('mongoose');
const connection = mongoose.connect('mongodb://localhost/choreo_notebook');

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})
