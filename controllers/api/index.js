const router = require('express').Router();
const classesRoutes = require('./classes-routes');
const reservationRoutes = require('./reservation-routes');
const userRoutes = require('./user-routes');


router.use('/classes', classesRoutes);
// post (localhost:3001/api/book/reservations)
router.use('/book', reservationRoutes);
router.use('/user-routes', userRoutes);


module.exports = router;
