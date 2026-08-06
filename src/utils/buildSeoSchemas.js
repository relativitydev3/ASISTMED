function buildSeoSchemas(site) {
  const url = site.url.replace(/\/$/, '');
  const desc = site.meta.description;
  const image = site.ogImage;
  const sameAs = site.sameAs || [`https://wa.me/${site.whatsapp}`];

  const medicalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${url}/#organization`,
    name: site.name,
    alternateName: site.alternateNames || [site.brandShort],
    slogan: site.slogan,
    description: site.aiSummary || desc,
    disambiguatingDescription: site.aiSummary || desc,
    url: `${url}/`,
    identifier: site.domain,
    image,
    logo: site.logo,
    email: site.email,
    telephone: site.phoneTel,
    priceRange: site.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: 'CO',
    },
    areaServed: site.municipalities.map((name) => ({
      '@type': 'City',
      name,
    })),
    sameAs,
    knowsAbout: [
      'Medicina asistida',
      'Enfermería a domicilio',
      'Inyectología domiciliaria',
      'Cuidado del adulto mayor',
      'Salud domiciliaria',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: site.phoneTel,
      email: site.email,
      contactType: 'customer service',
      availableLanguage: ['Spanish'],
      areaServed: 'CO',
    },
    medicalSpecialty: [
      'Nursing',
      'HomeHealth',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `Servicios ${site.name}`,
      itemListElement: site.services.map((serviceName, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          provider: { '@id': `${url}/#organization` },
        },
      })),
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${url}/#website`,
    name: site.name,
    url: `${url}/`,
    description: desc,
    inLanguage: 'es-CO',
    publisher: { '@id': `${url}/#organization` },
    potentialAction: {
      '@type': 'CommunicateAction',
      target: `https://wa.me/${site.whatsapp}`,
      name: 'Contactar por WhatsApp',
    },
  };

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}/#webpage`,
    url: `${url}/`,
    name: site.meta.title,
    description: desc,
    inLanguage: 'es-CO',
    isPartOf: { '@id': `${url}/#website` },
    about: { '@id': `${url}/#organization` },
    primaryImageOfPage: image,
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${url}/#faq`,
    mainEntity: site.faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.r },
    })),
  };

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${url}/` },
      { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${url}/#servicios` },
      { '@type': 'ListItem', position: 3, name: 'Contacto', item: `${url}/#contacto` },
    ],
  };

  return [medicalBusiness, website, webPage, faqPage, breadcrumb];
}

module.exports = { buildSeoSchemas };
