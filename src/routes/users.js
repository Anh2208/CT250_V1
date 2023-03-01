const express = require('express');
// const route = require('.');
const router = express.Router();

const usersController = require('../app/controllers/UsersController');

router.get('/create', usersController.create);
router.post('/adduser', usersController.adduser);
router.get('/:slug', usersController.show);

 

module.exports = router;