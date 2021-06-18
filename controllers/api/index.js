const router = require('express').Router();
const classesRoutes = require('./classes-routes');

router.use('/classes', classesRoutes);

module.exports = router;
