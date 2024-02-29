const User = require('../../Models/User')

const jwt = require('jsonwebtoken');
const { json } = require('express');

const { JWT_SECRET } = require('../../Config')




async function UploadController(req, res) {
  const {name,branch,semister,subject,publication,link} = req.body;

  try {

    if (!isEmail(email)) {
      return res.status(400).json({ message: "invalid email" });
    }

    const user = await User.findOne({ email: email });

    if (user) {
      return res.status(400).json({
        success: false,
      
        message: "user already exists"
      })
    }

    await User.create({
      email,
      password
    });

    return res.status(200).json({
      success: true,
    
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