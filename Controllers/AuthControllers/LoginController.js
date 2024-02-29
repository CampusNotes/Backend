const User = require('../../Models/User')

const { isEmail } = require('validator')

async function LoginUser(req, res) {
  const data = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: 'invalid credentials'
    });
  }

  if (!isEmail(data.email)) {
    return res.status(400).json({
      success: false,
      message: 'invalid email'
    });
  }

  try {
    const user = await User.findOne({ email: data.email });



    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'user not registered'
      });
    }

    if (user.password === data.password) {
      return res.status(200).json(
        {
          success: true,
          message: 'User found',
          user: user._id
        }
      )
    } else {
      return res.status(400).json({
        success: false,
        message: 'invalid password'
      });
    }


  } catch (error) {
    console.log(error);

    res.status(500).json(
      {
        success: false,
        message: 'login failed'
      }
    )
  }


}

module.exports = LoginUser;