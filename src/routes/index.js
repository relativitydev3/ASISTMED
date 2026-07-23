const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    web3formsKey: process.env.WEB3FORMS_ACCESS_KEY || '',
  });
});

module.exports = router;
