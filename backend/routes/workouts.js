const express = require("express")
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}=require('../controllers/workoutController')

const router = express.Router();

//get all workout
router.get('/',getWorkouts)

//get single workout
router.get('/:id',getWorkout)

//post a new workout
router.post('/', createWorkout)

//delete the workout
router.delete('/:id', deleteWorkout)

//update the workout
router.patch('/:id', updateWorkout)


module.exports = router