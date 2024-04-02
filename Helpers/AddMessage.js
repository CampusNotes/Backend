
const Message = require('../Models/Message')
async function addmessage(messageData) {
    const new_message = new Message({
        messagedata: messageData.text,
        user_id: messageData.user_id

    })

    await new_message.save()

    // const allmessage = await Message.find({}).populate("user_id");
    // // console.log(allmessage);
    return messageData;
}

module.exports = {
    addmessage
}