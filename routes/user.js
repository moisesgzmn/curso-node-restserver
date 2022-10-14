const { Router } = require('express');
const { getUser, putUser, postUser, deleteUser, patchUser } = require('../controllers/users');

const router = Router();

router.get('/', getUser)

router.post('/', postUser)

router.put('/:id', putUser)

router.patch('/', patchUser)

router.delete('/', deleteUser)

module.exports = router;