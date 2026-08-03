const express = require('express');
const { getSiteConfig } = require('../config/site');
const { buildSeoSchemas } = require('../utils/buildSeoSchemas');

const router = express.Router();

router.get('/', (req, res) => {
  const site = getSiteConfig(req);
  res.render('index', {
    site,
    schemas: buildSeoSchemas(site),
    web3formsKey: process.env.WEB3FORMS_ACCESS_KEY || '',
  });
});

module.exports = router;
