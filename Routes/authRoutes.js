const express = require('express');
const router = express.Router();

const { LoginController, RegisterController, RefreshTokenController } = require('../Controllers/AuthControllers')



router.post('/register', RegisterController);
router.post('/login', LoginController);
router.patch('/refresh', RefreshTokenController)


module.exports = router;