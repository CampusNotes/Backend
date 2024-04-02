const express = require('express');
const { GetAllFiltersController } = require('../Controllers/FilterControllers');
const { GetFileController } = require('../Controllers/FileController');
const router = express.Router();

router.get('/allfilters', GetAllFiltersController);
router.post('/filterfiles',GetFileController);

module.exports = router;