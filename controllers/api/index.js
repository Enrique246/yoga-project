const router = require('express').Router();
const exampleRoutes = require('./exampleRoutes');
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes);
router.use('/examples', exampleRoutes);

module.exports = router;
