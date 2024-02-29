const express = require('express');
const router = express.Router();

const { LoginController, RegisterController, RefreshTokenController, LogoutController } = require('../Controllers/AuthControllers')



router.post('/register', RegisterController);
router.post('/login', LoginController);
router.patch('/refresh', RefreshTokenController)
router.post('/logout', LogoutController)


module.exports = router;