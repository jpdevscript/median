const express = require('express');
const { getPrimeNumber, getMedian } = require('../utils/helper');

const router = express.Router();

router.get('/medianPrimeNumber/:inputValue', (req, res) => {
  try {
    const number = req.params.inputValue;
    if (!number) {
      return res.sendStatus(400);
    }
    const primeNumber = getPrimeNumber(number);
    const median = getMedian(primeNumber)
    res.send(median);
  } catch (error) {
    console.log('error.in.apiRoutes...', error);
    return res.sendStatus(400);
  }
});

module.exports = router;