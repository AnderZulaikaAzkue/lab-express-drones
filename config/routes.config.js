const express = require('express');

const router = express.Router();

// import drones controller
const drones = require('../controllers/drones.controller');
// import common, home  controller
const common = require('../controllers/common.controller'); 

//const user = require('../controllers/users.controller')


// link, GET users, 

//router.get("/users/new", users.create);
//router.post("/users", users.doCreate);


//link GET '/' with common controller home
router.get('/', common.home);
router.get('/drones', drones.list);
router.get("/drones/create-form", drones.create);
router.post("/drones", drones.doCreate);
router.get("/drones/:id/update-form", drones.update);
router.post("/drones/:id", drones.doUpdate); 

module.exports = router;


