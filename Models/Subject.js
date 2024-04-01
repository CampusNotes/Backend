
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({

    branch: {
        type: String,
        required: true
    },
    semester: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },


});


module.exports = mongoose.model('Subject', userSchema);