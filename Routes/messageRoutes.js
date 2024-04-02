const express = require('express')
const { GetAllMessageController } = require('../Controllers/MessageControllers')
const router = express.Router()


router.get('/allmessages', GetAllMessageController);

module.exports = router;