const router = require('express').Router();
const thoughtRoutes = require('./thoughts-route');
const userRoutes = require('./users-route');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;