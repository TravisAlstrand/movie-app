const express = require('express');
const router = express.Router();
const { User } = require('../models');
const { asyncHandler } = require('../middleware/asyncHandler');
const { authenticateUser } = require('../middleware/authenticateUser');

router.get('/users', authenticateUser, asyncHandler(async (req, res) => {
  const user = req.currentUser;

  if (user) {
    res.status(200).json({
      "firstName": user.firstName,
      "lastName": user.lastName,
      "emailAddress": user.emailAddress,
      "userId": user.id
    })
  } else {
    throw new Error;
  };
}));

router.post('/users', asyncHandler(async (req, res) => {
  try {
    await User.create(req.body);
    res.setHeader('Location', '/')
      .status(201)
      .end();
  } catch (error) {
    if (error.name === 'SequelizeValidationError' || error.name === 'SequelizeUniqueConstraintError') {
      const errors = error.errors.map(err => err.message);
      res.status(400).json({ errors });
    } else {
      throw error;
    };
  };
}));

module.exports = router;