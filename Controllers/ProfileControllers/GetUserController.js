const User = require('../../Models/User')
const AuthToken = require('../../Models/AuthToken')
const { responseMessage } = require('../../Helpers')
async function GetUserData(req, res) {
  try {
    const auth_token = req.headers.auth_token;
    // console.log(auth_token);

    const user = await AuthToken.findOne({ token: auth_token }).populate("user_id");

    if (!user) {
      return responseMessage(res, 401, false, 'No user', {})
    }

    return responseMessage(res, 200, true, 'Success', { user })

  } catch (err) {
    console.log(err);
    return responseMessage(res, 500, false, 'Server error', {})
  }
}

module.exports = GetUserData;