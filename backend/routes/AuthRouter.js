const authControl = require('../control/AuthControl');
const router = require('express').Router();












router.post('/login', authControl.Login);

router.post('/logout', authControl.Logout );




module.exports = router; 