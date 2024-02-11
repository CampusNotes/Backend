const express = require('express');
const router = express.Router();

const { RegisterController } = require('../Controllers/AuthControllers');
const { LoginController } = require('../Controllers/AuthControllers');



router.post('/register', RegisterController);
router.post('/login', LoginController);



module.exports = router;