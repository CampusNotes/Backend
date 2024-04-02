
const Message = require('../Models/Message')
async function getAllMessages() {


  const allmessage = await Message.find({}).populate("user_id");
  // console.log(allmessage);
  return allmessage;
}

module.exports = {
  getAllMessages
}