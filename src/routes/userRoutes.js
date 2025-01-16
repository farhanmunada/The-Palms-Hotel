const express = require('express');
const { getUsers, deleteUser, addUser, updateUser, getUser } = require('../handlers/userHandler');

const router = express.Router();

router.get('/:id', getUser);
router.get('/', getUsers);
router.post('/', addUser);
router.delete('/:id', deleteUser);
router.put('/:id', updateUser);

module.exports = router;
