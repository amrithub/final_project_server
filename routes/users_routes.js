const express = require('express');
const router = express.Router();
const {
    removeUser,
    changeUser,
    checkRequiresAdmin
} = require('../controllers/users_controller');
const {
    isAdmin,
    userAuthenticated
} = require('../utils/admin_utils');

router.use(userAuthenticated);

router.put('/:id', checkRequiresAdmin, changeUser);

router.delete('/:id', isAdmin, removeUser);

module.exports = router;