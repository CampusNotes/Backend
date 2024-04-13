const User = require('../../Models/User')

const { isEmail } = require('validator')
const AuthToken = require('../../Models/AuthToken')
const { responseMessage, comapreHashPassword, createAccessToken, createRefreshToken } = require('../../Helpers')

async function LoginUser(req, res) {
  const data = req.body;


  if (!data) {
    return responseMessage(res, 400, false, "invalid credentials", {})
  }

  if (!isEmail(data.email)) {
    return responseMessage(res, 400, false, "invalid email", {})
  }

  try {
    const user = await User.findOne({ email: data.email });



    if (!user) {
      return responseMessage(res, 400, false, "user not registered", {})
    }

    if (await comapreHashPassword(data.password, user.password)) {

      const access_token = createAccessToken({ id: user._id })


      // Save the refresh token to database
      const auth_token = new AuthToken({
        user_id: user._id,
        token: access_token
      })

      await auth_token.save()


      return responseMessage(res, 200, true, "User logged in", { isPofileCreated: user.isProfileCreated, user_id: user._id, auth_token })

    } else {
      return responseMessage(res, 400, false, "Invalid password", {})
    }


  } catch (error) {
    console.log(error);

    return responseMessage(res, 400, false, "Login failed", {})
  }


}

module.exports = LoginUser;