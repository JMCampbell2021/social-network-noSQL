const router = require('express').Router();
const thoughtRoutes = require('./thoughts-route');
const userRoutes = require('./users-route');

router.use('/thought', thoughtRoutes);
router.use('/user', userRoutes);

module.exports = router;