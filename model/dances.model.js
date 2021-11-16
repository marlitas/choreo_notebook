var mongoose = require('mongoose');
var danceSchema = new mongoose.Schema({
    name: String,
    estimatedLength: Number,
    isComplete: Boolean,
});
mongoose.model('Dance', danceSchema);