const express = require('express');
const authorizationMiddlewere = require('../middlewares/authorizationMiddlwere');
const api = require('../services/API');

const router = express.Router();

router.get('/btc/price', authorizationMiddlewere, async (req, res) => {
  const btcPrice = await api();
  return res.status(200).json(btcPrice);
});

module.exports = router;
