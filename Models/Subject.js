
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    
    branch: {
        type: String,
        enum: ['Computer_Science', 'Information_Technology', 'Electronics&Telecommunication'],
        required: true
    },
    semester: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8'],
        required: true
    },
    subject: {
        type: String,
        required: true
    },


});


module.exports = mongoose.model('Subject', userSchema);