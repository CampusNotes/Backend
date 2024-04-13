const User = require('../../Models/User')
const { isEmail } = require('validator')
const AuthToken = require('../../Models/AuthToken')
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
      email,
      password: hashedPassword
    })

    await new_user.save()

    const access_token = createAccessToken({ id: new_user._id })


    // Save the refresh token to database
    const auth_token = new AuthToken({
      user_id: new_user._id,
      token: access_token
    })

    await auth_token.save()

    return responseMessage(res, 201, true, "User registerd", { isPofileCreated: new_user.isProfileCreated, user_id: new_user._id, auth_token })

  } catch (error) {
    console.log(error, "User not Added");
    return responseMessage(res, 500, false, error);
  }
}


module.exports = RegisterUser