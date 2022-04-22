const express = require('express');
const emailAndPasswordValidate = require('../middlewares/emailAndPasswordValidate');
const { generateToken } = require('../helpers');

const router = express.Router();

// Atividade 1

router.post('/user/register', emailAndPasswordValidate, (req, res) => {
  const { username } = req.body;

  const isUsernameValid = username.length >= 3;

  if (isUsernameValid) {
    return res.status(201).json({ message: 'Created' });
  }

  return res.status(400).json({ message: 'Invalid data' });
});

router.post('/user/login', emailAndPasswordValidate, (req, res) => {
  return res.status(200).json({ token: generateToken() });
});

module.exports = router;
