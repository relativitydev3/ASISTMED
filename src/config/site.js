function normalizeUrl(url) {
  return url.endsWith('/') ? url : `${url}/`;
}

function getAppUrl(req) {
  if (process.env.SITE_URL) {
    return normalizeUrl(process.env.SITE_URL.trim());
  }
  if (req) {
    const host = (req.get('x-forwarded-host') || req.get('host') || '')
      .split(',')[0]
      .trim();
    const isPreviewHost =
      !host ||
      host.includes('.vercel.app') ||
      /^localhost(:\d+)?$/i.test(host) ||
      host.startsWith('127.0.0.1');
    if (!isPreviewHost) {
      const proto = (req.get('x-forwarded-proto') || req.protocol || 'https')
        .split(',')[0]
        .trim();
      return normalizeUrl(`${proto}://${host}`);
    }
  }
  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }
  if (req) {
    return normalizeUrl(`${req.protocol}://${req.get('host')}`);
  }
  return normalizeUrl('https://asistmedmedicinaasistida.com');
}

function getSiteConfig(req) {
  const url = getAppUrl(req);
  const domain = 'asistmedmedicinaasistida.com';
  const name = 'ASISTMED Medicina Asistida';
  const brandShort = 'ASISTMED Domicilios';
  const alternateNames = [
    'asistmedmedicinaasistida',
    'ASISTMED Medicina Asistida Colombia',
    'ASISTMED Domicilios',
    'ASISTMED Medellín',
    'ASISTMED Valle de Aburrá',
  ];

  const social = {
    instagram: 'https://www.instagram.com/asistmed_/',
    facebook: 'https://www.facebook.com/share/19HgxELRAs/',
    tiktok: 'https://www.tiktok.com/@asistmed_',
    whatsapp: 'https://wa.me/573246879234',
  };

  const services = [
    'Inyectología a domicilio',
    'Terapias con péptidos',
    'Curaciones',
    'Aplicación de medicamentos',
    'Actividades físicas adaptadas',
    'Cuidado integral adulto mayor',
    'Tratamientos sobrepeso',
    'Acompañamiento en hogar',
    'Acompañamiento en baño',
    'Asistencia en movilidad',
    'Estimulación cognitiva',
    'Actividades lúdicas',
  ];

  const municipalities = [
    'Medellín',
    'Bello',
    'Envigado',
    'Sabaneta',
    'Itagüí',
    'La Estrella',
    'Copacabana',
    'Girardota',
    'Barbosa',
  ];

  const aiSummary =
    'ASISTMED Medicina Asistida (asistmedmedicinaasistida.com) es una empresa de medicina asistida y salud a domicilio en Medellín y el Valle de Aburrá, Colombia. Ofrece inyectología, curaciones, aplicación de medicamentos, terapias con péptidos, cuidado de adulto mayor, acompañamiento en hogar y actividades físicas adaptadas, con enfermería y cuidadores certificados. Contacto: WhatsApp +57 324 687 9234.';

  const faq = [
    {
      q: '¿Qué hace ASISTMED Medicina Asistida?',
      r: 'ASISTMED Medicina Asistida presta servicios de salud y medicina asistida a domicilio en Medellín y nueve municipios del Valle de Aburrá. Entre sus servicios están inyectología, curaciones, aplicación de medicamentos, terapias con péptidos, cuidado integral del adulto mayor, acompañamiento en hogar, baño y movilidad, estimulación cognitiva y actividades físicas adaptadas, con personal de enfermería y cuidadores certificados.',
    },
    {
      q: '¿Qué es ASISTMED Medicina Asistida?',
      r: 'Es la marca de salud domiciliaria de ASISTMED en Antioquia. Su sitio oficial es asistmedmedicinaasistida.com. No debe confundirse con otras empresas que solo comparten la palabra “ASISTMED” en búsquedas genéricas.',
    },
    {
      q: '¿Cuál es el sitio web oficial de ASISTMED Medicina Asistida?',
      r: 'El sitio oficial es https://asistmedmedicinaasistida.com. También puedes contactarnos por WhatsApp al +57 324 687 9234 o en Instagram y Facebook como @asistmed_.',
    },
    {
      q: '¿En qué zonas prestan el servicio?',
      r: 'Atendemos en Medellín, Bello, Envigado, Sabaneta, Itagüí, La Estrella, Copacabana, Girardota y Barbosa.',
    },
    {
      q: '¿El personal está certificado?',
      r: 'Sí, todo nuestro equipo de enfermería y cuidadores cuenta con formación certificada y verificación de antecedentes.',
    },
    {
      q: '¿Puedo solicitar un servicio por horas?',
      r: 'Sí, contamos con planes por horas, por día o programas de acompañamiento permanente según la necesidad del paciente.',
    },
    {
      q: '¿Cómo se agenda una visita?',
      r: 'Puedes escribirnos por WhatsApp, visitar asistmedmedicinaasistida.com o diligenciar el formulario de contacto; confirmamos disponibilidad en menos de 24 horas.',
    },
    {
      q: '¿Manejan servicios de urgencia?',
      r: 'Contamos con disponibilidad ampliada para solicitudes prioritarias; contáctanos directamente para evaluar el caso.',
    },
  ];

  const metaTitle =
    'ASISTMED Medicina Asistida | Salud a Domicilio Medellín';
  const metaDescription =
    'ASISTMED Medicina Asistida (asistmedmedicinaasistida.com): medicina asistida y enfermería a domicilio en Medellín y el Valle de Aburrá. Inyectología, curaciones, péptidos y cuidado adulto mayor. WhatsApp +57 324 687 9234.';
  const metaKeywords = [
    'asistmedmedicinaasistida',
    'asistmed medicina asistida',
    'asistmedmedicinaasistida.com',
    'ASISTMED Medicina Asistida',
    'medicina asistida a domicilio medellín',
    'enfermería a domicilio valle de aburrá',
    'inyectología a domicilio antioquia',
    'curaciones a domicilio medellín',
    'cuidado adulto mayor domicilio',
    'salud domiciliaria colombia',
  ].join(', ');

  const ogImage = `${url}img/og-asistmed.jpg`;

  return {
    url,
    domain,
    name,
    brandShort,
    alternateNames,
    slogan: 'Medicina asistida y cuidado profesional en casa',
    tagline: 'Cuidado profesional, atención humana en casa',
    aiSummary,
    email: 'contacto@asistmed.com',
    phone: '+57 324 687 9234',
    phoneTel: '+573246879234',
    whatsapp: '573246879234',
    locale: 'es_CO',
    country: 'Colombia',
    region: 'Antioquia',
    city: 'Medellín',
    priceRange: '$$',
    ogImage,
    logo: `${url}img/logo.png`,
    social,
    sameAs: [
      social.instagram,
      social.facebook,
      social.tiktok,
      social.whatsapp,
      `${url.replace(/\/$/, '')}/`,
    ],
    services,
    municipalities,
    faq,
    meta: {
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      ogTitle: metaTitle,
      ogDescription:
        'Medicina asistida a domicilio en Medellín y el Valle de Aburrá: inyectología, curaciones, péptidos, enfermería certificada y cuidado del adulto mayor. Sitio oficial: asistmedmedicinaasistida.com',
    },
  };
}

module.exports = { getAppUrl, getSiteConfig };
