const mongoose = require('mongoose')
const Schema = mongoose.Schema


const refreshTokenSchema = Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  token: {
    type: String,
    required: true
  }
})


module.exports = mongoose.model('RefreshToken', refreshTokenSchema);
