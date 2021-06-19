const router = require('express').Router();
const classesRoutes = require('./classes-routes');
const reservationRoutes = require('./reservation-routes');
const userRoutes = require('./user-routes');


router.use('/classes', classesRoutes);
router.use('/reservations', reservationRoutes);
router.use('/user-routes', userRoutes);

module.exports = router;
