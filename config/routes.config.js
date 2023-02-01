const express = require('express');

const router = express.Router();
const drones = require('../controllers/drones.controller');
const common = require('../controllers/common.controller'); 

router.get('/', common.home);
router.get('/drones', drones.list);

module.exports = router;
