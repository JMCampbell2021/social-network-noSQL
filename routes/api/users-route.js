const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  createFriend, 
  deleteFriend,
} = require('../../controller/user-controller');

// Get all and Post at /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

// api/user/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// api/user/:userId/friends/:friendsId
router
.route('/:userId/friends/:friendsId')
.post(createFriend)
.delete(deleteFriend);

module.exports = router;