const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controller/user-controller');

// Get all and Post at /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser)

module.exports = router;