const User = require('../../Models/User')
const { isEmail } = require('validator')
const jwt = require('jsonwebtoken');
const { json } = require('express');

const { JWT_SECRET } = require('../../Config')




async function RegisterUser(req, res) {
  const { name, email, password } = req.body;

  try {

    if (!isEmail(email)) {
      return res.status(400).json({ "message": "invalid email" });
    }
    
    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        success: false,
        status: 400,
        message: "user already exists"
      })
    }

    await User.create({
      name,
      email,
      password,
      role,
    });

    return res.status(201).json({
        success: true,
        status: 200,
        message: "user Registered"
      })

  } catch (error) {
    console.log(error, "User not Added");
    return res.status(500).json({
        success: false,
        status: 500,
        message: "error occured"
      })
  }
}


module.exports = RegisterUser