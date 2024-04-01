const express = require('express');
const { GetAllFiltersController } = require('../Controllers/FilterControllers');
const router = express.Router();

router.get('/allfilters', GetAllFiltersController);

module.exports = router;