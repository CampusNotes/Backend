const express = require('express')
const router = express.Router()
const { GetUserController, CreateProfileController } = require('../Controllers/ProfileControllers')


router.get('/userdata', GetUserController);
router.patch('/updateprofile', CreateProfileController);
module.exports = router;