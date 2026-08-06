/* ASISTMED — refuerzo SEO en cliente (meta + schemas desde site-config.js) */
window.AsistmedSEO = (function () {
  function cfg() {
    return window.ASISTMED_CONFIG || {};
  }

  function pageUrl() {
    const c = cfg();
    if (c.url) return c.url.replace(/\/$/, '');
    return window.location.origin;
  }

  function setMeta(attr, key, value) {
    if (!value) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  }

  function setLink(rel, href, extra = {}) {
    if (!href) return;
    const sel = extra.hreflang
      ? `link[rel="${rel}"][hreflang="${extra.hreflang}"]`
      : `link[rel="${rel}"]:not([hreflang])`;
    let el = document.querySelector(sel);
    if (!el) {
      el = document.createElement('link');
      el.setAttribute('rel', rel);
      document.head.appendChild(el);
    }
    el.setAttribute('href', href);
    Object.entries(extra).forEach(([k, v]) => el.setAttribute(k, v));
  }

  function buildSchemas() {
    const c = cfg();
    const url = pageUrl();
    const name = c.name || 'ASISTMED Medicina Asistida';
    const desc = c.meta?.description || c.aiSummary || '';
    const image = c.ogImage || `${url}/img/og-asistmed.jpg`;
    const sameAs = c.sameAs || [`https://wa.me/${c.whatsapp || '573246879234'}`];

    const medical = {
      '@context': 'https://schema.org',
      '@type': 'MedicalBusiness',
      '@id': `${url}/#organization`,
      name,
      alternateName: c.alternateNames,
      slogan: c.slogan,
      description: c.aiSummary || desc,
      url: `${url}/`,
      image,
      logo: c.logo || `${url}/img/logo.png`,
      telephone: c.phoneTel || '+573246879234',
      email: c.email,
      identifier: c.domain,
      areaServed: (c.municipalities || []).map((city) => ({ '@type': 'City', name: city })),
      sameAs,
      knowsAbout: [
        'Medicina asistida',
        'Enfermería a domicilio',
        'Inyectología domiciliaria',
        'Cuidado del adulto mayor',
      ],
    };

    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${url}/#faq`,
      mainEntity: (c.faq || []).map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.r },
      })),
    };

    return [medical, faqPage];
  }

  function injectSchemas(schemas) {
    document.querySelectorAll('script[data-asistmed-seo-schema]').forEach((n) => n.remove());
    schemas.forEach((data, i) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-asistmed-seo-schema', String(i));
      s.textContent = JSON.stringify(data);
      document.head.appendChild(s);
    });
  }

  function apply() {
    const c = cfg();
    if (!c.url) return;

    const url = c.url.replace(/\/$/, '') + '/';
    const title = c.meta?.title;
    const desc = c.meta?.description;
    const image = c.ogImage;

    if (title) document.title = title;
    setMeta('name', 'description', desc);
    setMeta('name', 'keywords', c.meta?.keywords);
    setMeta('name', 'robots', 'index, follow, max-image-preview:large');
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('name', 'twitter:image', image);

    setLink('canonical', url);
    setLink('alternate', url, { hreflang: 'es' });
    setLink('alternate', url, { hreflang: 'x-default' });

    injectSchemas(buildSchemas());
  }

  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', apply);
    } else {
      apply();
    }
  }

  return { init, apply };
})();
