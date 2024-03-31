
const Message=require('./Models/Message')
async function addmessage(messageData) {
    const new_message = new Message({
        message: messageData.message,
        user_id: messageData.user_id
       
      })
  
      await new_user.save()

      const allmessage= await Message.find();

      return allmessage;
}

module.exports = {
    addmessage
}