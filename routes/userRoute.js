'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// catRoute

router.get('/', userController.user_list_get);
  
router.get('/:id', userController.user_get);
  
 router.post('/', userController.user_create_post);
  
 router.put('/', (req, res) => {
    res.send('put request reached at /user');
  });
  
 router.delete('/', (req, res) => {
    res.send('delete request reached at /user');
  });

  module.exports = router;

 