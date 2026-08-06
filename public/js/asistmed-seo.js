/* ASISTMED — sincroniza meta desde site-config.js (schemas ya van en el HTML del servidor) */
window.AsistmedSEO = (function () {
  function cfg() {
    return window.ASISTMED_CONFIG || {};
  }

  /** Evita canonical erróneo si site-config trae URL de preview Vercel. */
  function publicBaseUrl() {
    const origin = window.location.origin.replace(/\/$/, '');
    const fromConfig = (cfg().url || '').replace(/\/$/, '');
    if (!fromConfig) return `${origin}/`;
    if (fromConfig.includes('.vercel.app') && !origin.includes('.vercel.app')) {
      return `${origin}/`;
    }
    return `${fromConfig}/`;
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

  function apply() {
    const c = cfg();
    const url = publicBaseUrl();
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
