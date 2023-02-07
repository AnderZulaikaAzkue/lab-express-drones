const express = require('express');



// import drones controller
const drones = require('../controllers/drones.controller');
// import common, home  controller
const common = require('../controllers/common.controller'); 

const users = require("../controllers/users.controller");


const router = express.Router();

// link, GET users, 
router.get("/users/new", users.create);
router.post("/users", users.doCreate);


//link GET '/' with common controller home
router.get('/', common.home);
router.get('/drones', drones.list);
router.get("/drones/create-form", drones.create);
router.post("/drones", drones.doCreate);
router.get("/drones/:id/update-form", drones.update);
router.post("/drones/:id", drones.doUpdate); 
router.post("/drones/:id/delete", drones.delete);

module.exports = router;


