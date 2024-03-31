
const AuthToken = require('../../Models/AuthToken')
const { responseMessage, verifyAccessToken } = require('../../Helpers')

async function LogoutUser(req, res) {
  const auth_token = req.headers['auth_token'];
  console.log(auth_token);
  //   if (!refresh_token) {
  //     return responseMessage(res, 400, false, "invalid credentials", {})
  //   }

  try {

    const access_token = verifyAccessToken(auth_token);

    const userid = access_token.id;

    const response = await AuthToken.deleteMany({ user_id: userid });

    if (response) {
      return responseMessage(res, 200, true, "Logout Successful", {})
    }

  } catch (error) {
    console.log(error);

    return responseMessage(res, 400, false, "Logout failed", {})
  }


}

module.exports = LogoutUser;