const express = require('express');
const { getAllUsers } = require('./../controller/userController');

const router = express.Router();

router.param('id', (req, res, next, val) => {
  next();
});

router.route('/').get(getAllUsers);

module.exports = router;
