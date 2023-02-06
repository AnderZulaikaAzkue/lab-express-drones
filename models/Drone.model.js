// Iteration #1

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema ({
    name: {
        type:'String',
        require: 'Drone name is required'
    },
    propellers: {
       type: 'Number',
       require: 'Propeller info is required'
    },
    maxSpeed:{ 
       type: 'Number',
       require: 'Max Speed is required'
    },
});


const Drone = mongoose.model('Drone', droneSchema);
module.exports = Drone;