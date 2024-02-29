
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
    publicationName: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    uploadedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },


});


module.exports = mongoose.model('File', userSchema);