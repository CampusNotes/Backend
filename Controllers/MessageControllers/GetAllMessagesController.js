
const Message = require('../../Models/Message')
const { responseMessage } = require('../../Helpers')
async function getAllMessages(req, res) {
  try {
    const allmessage = await Message.find({}).populate("user_id");

    if (allmessage) {
      return responseMessage(res, 200, true, "All available chats", { chats: allmessage })
    }
    else {
      return responseMessage(res, 200, true, "No chats chats", { chats: [] })
    }

  } catch (error) {
    console.log(error);
    return responseMessage(res, 500, false, "Error getting chats", {})
  }
}

module.exports = getAllMessages