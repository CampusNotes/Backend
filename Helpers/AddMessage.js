
const Message = require('../Models/Message')
async function addmessage(messageData) {
    const new_message = new Message({
        messagedata: messageData.text,
        user_id: messageData.user_id

    })

    await new_message.save()

    const allmessage = await Message.find();

    return allmessage;
}

module.exports = {
    addmessage
}