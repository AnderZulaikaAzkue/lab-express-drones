const express = require('express');

const router = express.Router();

// import drones controller
const drones = require('../controllers/drones.controller');
// import common, home  controller
const common = require('../controllers/common.controller'); 

//link GET '/' with common controller home
router.get('/', common.home);
router.get('/drones', drones.list);

router.get("/drones/new", drones.create);
router.post("/drones", drones.doCreate);

module.exports = router;


