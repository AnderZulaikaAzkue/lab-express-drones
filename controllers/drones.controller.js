// require the Drone model here
const Drone = require('../models/drone.model');

//cons mongoose lo hemos puesto para que funciones el error mongoose del doCreate del formulario
const mongoose = require("mongoose");

module.exports.list = (req, res, next) => {
  // Iteration #2: List the drones
  Drone.find()
    .then((drones) => {
      res.render('drones/list', { drones });
    })
    .catch((error) => next(error))
}

module.exports.create = (req, res, next) => {
  res.render("drones/create-form");
};


module.exports.doCreate = (req, res, next) => {
  Drone.create(req.body)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.render("drones/create-form", { errors: err.errors, drone: req.body });
      } else {
        next(err);
      }
    });
};

module.exports.update = (req, res, next) => {
  Drone.findById(req.params.id)
    .then((drone) => {
      res.render("drones/update-form", { drone });
    })
    .catch(next);
};

module.exports.doUpdate = (req, res, next) => {
  Drone.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
    .then((drone) => {
      res.redirect("/drones");
    })
    .catch((err) => {
    
      next(err);
    });
};

module.exports.delete = (req, res, next) => {
  Drone.findByIdAndDelete(req.params.id)
    .then((drone) => {
      res.redirect("/drones");
    })
    .catch(next);
};

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

