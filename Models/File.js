
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
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
    publicationName: {
        type: String,
        required: true
    },
    fileId: {
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