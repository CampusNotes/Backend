const User = require('../../Models/User')
const AuthToken = require('../../Models/AuthToken')
const { responseMessage } = require('../../Helpers')

async function CreateProfile(req, res) {
  try {
    const newData = req.body;
    const auth_token = req.headers.auth_token;
    // console.log(auth_token);

    const user = await AuthToken.findOne({ token: auth_token });

    if (!user) return responseMessage(res, 400, false, 'User not found', {})

    const user_id = user.user_id;

    const updatedUser = await User.findByIdAndUpdate(user_id, { ...newData, isProfileCreated: true }, { new: true });

    if (!updatedUser) return responseMessage(res, 400, false, 'Unable to update profile', {})

    return responseMessage(res, 200, true, 'Profile updated successfully', updatedUser)

  } catch (err) {
    console.log(err);
    return responseMessage(res, 500, false, 'Server error', {})
  }
}

module.exports = CreateProfile;