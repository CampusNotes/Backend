const User = require('../../Models/User')

const { isEmail } = require('validator')

async function LoginUser(req, res) {
  const data = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: 'invalid crendentials'
    });
  }

  if (!isEmail(data.email)) {
    return res.status(400).json({
      success: false,
      status: 400,
      message: 'invalid email'
    });
  }

  try {
    const user = await User.findOne({ email: data.email });

    if (!user) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: 'user not registered'
      });
    }



    return res.status(200).json(
      {
        success: true,
        status: 200,
        message: 'User found',
        user: user._id
      }
    )
  } catch (error) {
    console.log(error);

    res.status(400).json(
      {
        success: false,
        status: 400,
        message: 'login failed'
      }
    )
  }


}