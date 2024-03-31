
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const userSchema = new Schema({
    
    messagedata: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },

});


module.exports = mongoose.model('Message', userSchema);