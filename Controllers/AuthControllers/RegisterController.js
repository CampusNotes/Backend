const User = require('../../Models/User')
const { isEmail } = require('validator')
const RefreshToken = require('../../Models/RefreshToken')
const { responseMessage, hashPassword, createAccessToken, createRefreshToken } = require('../../Helpers')

async function RegisterUser(req, res) {
  const { email, password } = req.body;

  try {

    if (!isEmail(email)) {
      return responseMessage(res, 400, false, "Invalid email", {})
    }

    const user = await User.findOne({ email: email });

    if (user) {
      return responseMessage(res, 400, false, "User already exists with the email provided")
    }

    const hashedPassword = await hashPassword(password)

    const new_user = new User({
      username,
      email,
      password: hashedPassword
    })

    await new_user.save()

    const access_token = createAccessToken({ id: new_user._id })
    const refresh_token = createRefreshToken({ id: new_user._id })

    // Save the refresh token to database
    const refreshToken = new RefreshToken({
      user_id: new_user._id,
      token: refresh_token
    })

    await refreshToken.save()

    return responseMessage(res, 201, true, "User registerd", { user_id: new_user._id, access_token, refresh_token })

  } catch (error) {
    console.log(error, "User not Added");
    return responseMessage(res, 500, false, error);
  }
}


module.exports = RegisterUser