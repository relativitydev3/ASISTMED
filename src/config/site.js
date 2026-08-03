function normalizeUrl(url) {
  return url.endsWith('/') ? url : `${url}/`;
}

function getAppUrl(req) {
  if (process.env.SITE_URL) {
    return normalizeUrl(process.env.SITE_URL.trim());
  }
  if (process.env.VERCEL_URL) {
    return normalizeUrl(`https://${process.env.VERCEL_URL}`);
  }
  if (req) {
    return normalizeUrl(`${req.protocol}://${req.get('host')}`);
  }
  return normalizeUrl('https://www.asistmed.com');
}

function getSiteConfig(req) {
  const url = getAppUrl(req);
  const name = 'ASISTMED Medicina Asistida';
  const brandShort = 'ASISTMED Domicilios';
  const alternateNames = [
    'ASISTMED Domicilios',
    'ASISTMED Medellín',
    'ASISTMED Valle de Aburrá',
    'ASISTMED Colombia medicina asistida',
  ];

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

  const faq = [
    {
      q: '¿Qué es ASISTMED Medicina Asistida?',
      r: 'ASISTMED Medicina Asistida es nuestro servicio de salud a domicilio en Medellín y el Valle de Aburrá. Ofrecemos enfermería, inyectología, curaciones, cuidado adulto mayor y terapias con personal certificado en la comodidad del hogar.',
    },
    {
      q: '¿Es la misma ASISTMED que aparece en otras búsquedas?',
      r: 'Somos ASISTMED Medicina Asistida, empresa de servicios de salud domiciliaria en Antioquia, Colombia. Para contactarnos usa nuestro WhatsApp +57 324 687 9234 o el sitio oficial asistmed.com.',
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
      r: 'Puedes escribirnos por WhatsApp o diligenciar el formulario de contacto y te confirmaremos disponibilidad en menos de 24 horas.',
    },
    {
      q: '¿Manejan servicios de urgencia?',
      r: 'Contamos con disponibilidad ampliada para solicitudes prioritarias; contáctanos directamente para evaluar el caso.',
    },
  ];

  const metaTitle =
    'ASISTMED Medicina Asistida | Enfermería a Domicilio en Medellín';
  const metaDescription =
    'ASISTMED Medicina Asistida: servicios de salud a domicilio en Medellín y el Valle de Aburrá. Inyectología, curaciones, péptidos, cuidado adulto mayor y enfermería certificada. WhatsApp +57 324 687 9234.';
  const metaKeywords = [
    'asistmed medicina asistida',
    'asistmed medellín',
    'asistmed domicilios medellín',
    'asistmed valle de aburrá',
    'medicina asistida a domicilio',
    'asistmed colombia enfermería',
    'asistmed inyectología domicilio',
    'enfermería a domicilio medellín',
    'curaciones a domicilio antioquia',
    'cuidado adulto mayor medellín',
    'salud domiciliaria valle de aburrá',
  ].join(', ');

  const ogImage = `${url}img/og-asistmed.jpg`;

  return {
    url,
    name,
    brandShort,
    alternateNames,
    slogan: 'Medicina asistida y cuidado profesional en casa',
    tagline: 'Cuidado profesional, atención humana en casa',
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
    services,
    municipalities,
    faq,
    meta: {
      title: metaTitle,
      description: metaDescription,
      keywords: metaKeywords,
      ogTitle: metaTitle,
      ogDescription:
        'ASISTMED Medicina Asistida — tu servicio de salud a domicilio en Medellín y el Valle de Aburrá. Inyectología, curaciones, péptidos y acompañamiento profesional.',
    },
  };
}

module.exports = { getAppUrl, getSiteConfig };
