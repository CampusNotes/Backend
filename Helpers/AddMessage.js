
const Message = require('../Models/Message')
async function addmessage(messageData) {
    const new_message = new Message({
        messagedata: messageData.text,
        user_id: messageData.user_id
    })

    await new_message.save()

    const data = await Message.findOne({ _id: new_message._id }).populate("user_id");

    // // console.log(allmessage);
    return data;
}

module.exports = {
    addmessage
}