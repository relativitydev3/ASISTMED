const express = require('express');
const { getSiteConfig } = require('../config/site');
const { safeScriptJson } = require('../utils/safeJson');

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
  const lastmod = new Date().toISOString().split('T')[0];
  const loc = site.url.replace(/\/$/, '');

  res.type('application/xml');
  res.send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${loc}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="es" href="${loc}/"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${loc}/"/>
  </url>
</urlset>
`);
});

router.get('/js/site-config.js', (req, res) => {
  const site = getSiteConfig(req);
  res.set('Cache-Control', 'public, max-age=300');
  res.type('application/javascript');
  res.send(`window.ASISTMED_CONFIG = ${safeScriptJson(site)};`);
});

module.exports = router;
