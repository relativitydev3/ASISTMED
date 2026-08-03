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
  const name = 'ASISTMED Domicilios';

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
    'ASISTMED Domicilios | Enfermería e Inyectología a Domicilio en Medellín';
  const metaDescription =
    'Servicios de salud a domicilio en Medellín y el Valle de Aburrá: inyectología, curaciones, péptidos, cuidado adulto mayor y enfermería certificada. Atención 24/7 por WhatsApp.';
  const metaKeywords = [
    'asistmed',
    'enfermería a domicilio medellín',
    'inyectología a domicilio',
    'curaciones a domicilio',
    'cuidado adulto mayor',
    'salud domiciliaria valle de aburrá',
    'terapias péptidos medellín',
    'aplicación medicamentos domicilio',
    'cuidadores medellín',
    'servicios de enfermería domiciliaria',
  ].join(', ');

  const ogImage = `${url}img/og-asistmed.jpg`;

  return {
    url,
    name,
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
        'Tu bienestar y el de tu familia en la comodidad de tu hogar. Inyectología, curaciones, péptidos y acompañamiento profesional en Medellín y el Valle de Aburrá.',
    },
  };
}

module.exports = { getAppUrl, getSiteConfig };
