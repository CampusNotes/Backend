const User = require('../../Models/User')

const { isEmail } = require('validator')
const RefreshToken = require('../../Models/RefreshToken')
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

    if (comapreHashPassword(user.password, data.password)) {
      const access_token = await createAccessToken({ id: user._id })
      const refresh_token = await createRefreshToken({ id: user._id })

      // Save the refresh token to database
      const refreshToken = new RefreshToken({
        user_id: user._id,
        token: refresh_token
      })

      await refreshToken.save()

      return responseMessage(res, 200, true, "User logged in", { user_id: user._id, access_token, refresh_token })

    } else {
      return responseMessage(res, 400, false, "Invalid password", {})
    }


  } catch (error) {
    console.log(error);

    return responseMessage(res, 400, false, "Login failed", {})
  }


}

module.exports = LoginUser;