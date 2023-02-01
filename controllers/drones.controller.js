
// require the Drone model here
const Drone = require('../models/drone.model');

module.exports.list = (req, res, next) => {
    // Iteration #2: List the drones
    Drone.find()
        .then((drones) => {
            res.render('drones/list', { drones });
})
.catch ((error) => next(error))
}

/*router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});*/
