const express = require('express');
const router = express.Router();

const { RegisterController } = require('../Controllers/AuthControllers');
const { LoginController } = require('../Controllers/AuthControllers');
const { LogoutController } = require('../Controllers/AuthControllers')


router.post('/register', RegisterController);
router.post('/login', LoginController);
router.post('/logout', LogoutController);


module.exports = router;