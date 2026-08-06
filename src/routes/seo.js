const express = require('express');
const path = require('path');
const fs = require('fs');
const { getSiteConfig } = require('../config/site');
const { accessKey: web3formsAccessKey } = require('../config/web3forms');
const { safeScriptJson } = require('../utils/safeJson');

const sitemapPath = path.join(__dirname, '../../public/sitemap.xml');

const router = express.Router();

router.get('/robots.txt', (req, res) => {
  const site = getSiteConfig(req);
  res.type('text/plain');
  res.send(`User-agent: *
Allow: /

Sitemap: ${site.url}sitemap.xml
`);
});

router.get('/sitemap.xml', (req, res) => {
  const site = getSiteConfig(req);
  const loc = site.url.replace(/\/$/, '');
  const lastmod = new Date().toISOString().split('T')[0];

  let xml = fs.readFileSync(sitemapPath, 'utf8');
  xml = xml.replace(
    /<loc>https:\/\/asistmedmedicinaasistida\.com\/<\/loc>/,
    `<loc>${loc}/</loc>`
  );
  xml = xml.replace(
    /href="https:\/\/asistmedmedicinaasistida\.com\/"/g,
    `href="${loc}/"`
  );
  if (/<lastmod>/.test(xml)) {
    xml = xml.replace(/<lastmod>[^<]*<\/lastmod>/, `<lastmod>${lastmod}</lastmod>`);
  } else {
    xml = xml.replace(/(<url>\s*)/, `$1<lastmod>${lastmod}</lastmod>\n    `);
  }

  res.type('application/xml; charset=UTF-8');
  res.set('X-Content-Type-Options', 'nosniff');
  res.send(xml);
});

router.get('/js/site-config.js', (req, res) => {
  const site = getSiteConfig(req);
  res.set('Cache-Control', 'public, max-age=300');
  res.type('application/javascript');
  res.send(`window.ASISTMED_CONFIG = ${safeScriptJson(site)};`);
});

router.get('/js/contact-config.js', (req, res) => {
  res.set('Cache-Control', 'public, max-age=300');
  res.type('application/javascript');
  res.send(
    `window.ASISTMED_CONTACT = ${safeScriptJson({
      accessKey: web3formsAccessKey,
      endpoint: 'https://api.web3forms.com/submit',
    })};`
  );
});

module.exports = router;
