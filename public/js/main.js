/* ==========================================================================
   DATOS DE LA PÁGINA
   Objeto centralizado — pensado para reemplazarse a futuro por datos
   provenientes de una API / base de datos (MySQL) vía Express.
   ========================================================================== */
const ASISTMED_DATA = {
  whatsapp: "573127868897",

  iconos: {
    enfermera: '<path d="M12 2a4 4 0 0 0-4 4v2a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/><path d="M6 21v-2a6 6 0 0 1 12 0v2"/><path d="M9 14v3M15 14v3"/>',
    jeringa: '<path d="M18 2l4 4M11 13l-6 6M14 6l4 4M4 20l3-3M8 14l6-6"/>',
    pastilla: '<rect x="3" y="9" width="18" height="6" rx="3" transform="rotate(-45 12 12)"/><path d="M8 8l8 8"/>',
    curacion: '<path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 8v8M8 12h8"/>',
    balanza: '<path d="M12 3v18M5 7h14M5 7l-3 7a3 3 0 0 0 6 0zM19 7l-3 7a3 3 0 0 0 6 0z"/>',
    manos: '<path d="M11 21H7a2 2 0 0 1-2-2v-4M7 15l4-4 3 3 5-5"/><path d="M15 5l4 4-4 4"/>',
    banio: '<path d="M4 12h16M6 12V6a2 2 0 0 1 2-2h1M6 12v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-8"/>',
    movilidad: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="18" r="1"/><path d="M6 18l4-9h4l3 5h-4"/>',
    cerebro: '<path d="M12 4a4 4 0 0 0-4 4 3 3 0 0 0-2 5 3 3 0 0 0 2 5h8a3 3 0 0 0 2-5 3 3 0 0 0-2-5 4 4 0 0 0-4-4z"/>',
    fisico: '<path d="M6 8v8M18 8v8M2 12h4M18 12h4M6 12h12"/>',
    ludico: '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="9" r="1"/><circle cx="15" cy="9" r="1"/><path d="M8 15c1 1 2 1.5 4 1.5s3-.5 4-1.5"/>',
    peptido: '<path d="M4 20c4-8 8 4 12-4s4-8 4-8M4 8s4-8 8-4"/>',
    fuego: '<path d="M12 22c4.4 0 7-3 7-6.7 0-3-1.8-5.4-4.8-8.3.1 2.3-1.2 3.8-2.4 4.8.1-3.7-1.4-6.6-4.8-9.6.3 4.2-2.5 6.3-3.6 9.5C2.1 15.9 5.5 22 12 22z"/><path d="M12 22c-1.8 0-3.2-1.2-3.2-3.1 0-1.5.9-2.8 2.5-4.3-.1 1.4.7 2.3 1.3 2.9.8-1 1.1-2.1.9-3.5 1.7 1.7 2.3 3.2 2.3 4.9C15.8 20.8 14.2 22 12 22z"/>',
    reloj: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
    escudo: '<path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/>',
    corazon: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
    check: '<path d="M20 6L9 17l-5-5"/>',
    estrella: '<path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 16.8 6.5 19.5l1-6.2L3 8.9 9 8z"/>',
    grupo: '<circle cx="9" cy="7" r="4"/><path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/><circle cx="19" cy="8" r="3"/><path d="M17 21v-1a3 3 0 0 0-2-2.83"/>',
    docs: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>'
  },

  enfoque: [
    { icono:"escudo", titulo:"Evaluación inicial", desc:"Valoración de salud completa antes de iniciar el servicio." },
    { icono:"docs", titulo:"Plan personalizado", desc:"Diseñamos un plan de cuidado a la medida de cada paciente." },
    { icono:"enfermera", titulo:"Personal calificado", desc:"Enfermeros y auxiliares con formación y experiencia certificada." },
    { icono:"reloj", titulo:"Puntualidad", desc:"Visitas programadas y cumplidas con precisión horaria." },
    { icono:"corazon", titulo:"Atención cálida", desc:"Trato humano, respetuoso y cercano en cada visita." },
    { icono:"grupo", titulo:"Comunicación con la familia", desc:"Reportes constantes sobre el estado del paciente." },
    { icono:"check", titulo:"Seguimiento continuo", desc:"Supervisión permanente de la evolución del paciente." },
    { icono:"escudo", titulo:"Bioseguridad", desc:"Protocolos estrictos de higiene y manejo de insumos médicos." }
  ],

  servicios: [
    {
      icono:"jeringa", imagen:"/img/service-02.jpg", titulo:"Inyectología",
      desc:"Administración segura de medicamentos por vía intramuscular, intravenosa, subcutánea e intradérmica, siempre bajo prescripción médica y siguiendo estrictos protocolos de bioseguridad.",
      incluye:[
        "Aplicación de medicamentos.",
        "Valoración previa del paciente.",
        "Observación posterior al procedimiento.",
        "Atención domiciliaria con personal calificado."
      ]
    },
    {
      icono:"peptido", imagen:"/img/service-12.png", titulo:"Programa Integral de Optimización y Terapias con Péptidos",
      desc:"Ofrecemos un servicio de vanguardia que combina la ciencia médica, la nutrición avanzada y el entrenamiento físico para ayudarte a alcanzar tus metas de rendimiento, estética o longevidad de forma segura. No vendemos solo una aplicación; diseñamos un protocolo integral y supervisado por profesionales.",
      incluyeTitulo:"¿Qué incluye el servicio?",
      incluye:[
        "Diseño de plan nutricional: un nutriólogo especializado elabora tu dieta médica a medida para maximizar los efectos biológicos del tratamiento.",
        "Planificación deportiva: un entrenador certificado estructura tu rutina de ejercicios alineada con tus objetivos específicos.",
        "Aplicación clínica segura: una enfermera calificada administra los péptidos inyectables bajo estrictos protocolos de higiene y dosificación.",
        "Seguimiento y ajustes: evaluaciones periódicas de tu evolución para adaptar la alimentación, el entrenamiento y las dosis."
      ]
    },
    {
      icono:"fuego", imagen:"/img/service-13-quemadores-grasa.jpeg", titulo:"Quemadores de Grasa",
      desc:"Acompañamiento profesional para personas que, tras valoración y bajo indicación correspondiente, utilizan productos de apoyo para sus objetivos de composición corporal y bienestar.",
      aviso:"Importante: este servicio requiere valoración profesional. Los productos no sustituyen una alimentación equilibrada, actividad física ni el manejo médico; su uso y aplicación se realizan únicamente cuando son apropiados para cada persona.",
      incluyeTitulo:"Opciones y acompañamiento:",
      incluye:[
        "Orientación inicial según tus objetivos y antecedentes de salud.",
        "Opciones disponibles: Two +, Vitamina C, Tense Up, Maxfit, L-Carnitina, Alcachofa, Silicio orgánico y Fosfa.",
        "Aplicación segura cuando esté indicada por un profesional.",
        "Seguimiento de bienestar y recomendaciones de hábitos saludables.",
        "Atención personalizada por nuestro equipo de salud."
      ]
    },
    {
      icono:"curacion", imagen:"/img/service-04.jpg", titulo:"Curaciones",
      desc:"Realizamos curaciones simples y especializadas para favorecer la cicatrización, prevenir infecciones y acelerar el proceso de recuperación.",
      incluye:[
        "Curaciones de heridas.",
        "Cambio de apósitos.",
        "Valoración y seguimiento.",
        "Educación sobre cuidados posteriores."
      ]
    },
    {
      icono:"pastilla", imagen:"/img/service-03.jpg", titulo:"Aplicación de Medicamentos",
      desc:"Administración responsable de medicamentos formulados por el médico, garantizando el cumplimiento del tratamiento en la comodidad del hogar.",
      incluye:["Administración según horario prescrito","Control de dosis y vía de administración","Registro de medicación suministrada","Verificación de la prescripción médica","Alertas a la familia sobre cambios","Seguimiento de reacciones adversas"]
    },
    {
      icono:"fisico", imagen:"/img/service-10.jpg", titulo:"Actividades Físicas",
      desc:"Diseñamos ejercicios adaptados a la condición de cada paciente para mejorar la movilidad, fortalecer la musculatura y mantener la independencia funcional.",
      incluye:["Rutinas adaptadas a la condición del paciente","Ejercicios de flexibilidad y fuerza","Movilización articular supervisada","Caminatas guiadas y seguras","Prevención del sedentarismo","Progresión según capacidades"]
    },
    {
      icono:"manos", imagen:"/img/service-01.jpg", titulo:"Cuidado Integral Adulto Mayor",
      desc:"Brindamos atención personalizada para adultos mayores, promoviendo su bienestar físico, emocional y social mediante un acompañamiento profesional y humanizado.",
      incluye:[
        "Cuidado por horas, diurno, nocturno o permanente.",
        "Supervisión y acompañamiento.",
        "Ayuda en la alimentación e hidratación.",
        "Acompañamiento en el baño e higiene personal.",
        "Administración de medicamentos según prescripción médica.",
        "Control de signos vitales.",
        "Prevención de caídas.",
        "Cambios de posición y movilización.",
        "Estimulación cognitiva.",
        "Actividades físicas adaptadas.",
        "Actividades recreativas y lúdicas.",
        "Acompañamiento a citas médicas cuando sea requerido."
      ]
    },
    {
      icono:"balanza", imagen:"/img/service-05.png", titulo:"Tratamientos Sobrepeso",
      desc:"Ofrecemos acompañamiento de enfermería para pacientes que reciben tratamientos médicos orientados al control del sobrepeso y la obesidad.",
      aviso:"Importante: Este servicio se presta únicamente bajo prescripción médica. ASISTMED no formula medicamentos ni reemplaza la valoración del médico tratante.",
      incluye:[
        "Aplicación de medicamentos prescritos.",
        "Seguimiento de signos vitales.",
        "Educación sobre el tratamiento.",
        "Acompañamiento durante el proceso.",
        "Monitoreo de posibles efectos secundarios."
      ]
    },
    {
      icono:"corazon", imagen:"/img/service-06.jpg", titulo:"Acompañamiento",
      desc:"Servicio de cuidado temporal para pacientes que requieren supervisión y apoyo durante algunas horas del día o de la noche.",
      incluyeTitulo:"Ideal para:",
      incluye:[
        "Adultos mayores.",
        "Pacientes en recuperación.",
        "Personas con movilidad reducida.",
        "Personas con discapacidad.",
        "Cuidados postoperatorios."
      ]
    },
    {
      icono:"banio", imagen:"/img/service-07.png", titulo:"Acompañamiento en Baño",
      desc:"Asistencia durante el aseo e higiene personal, garantizando seguridad, comodidad y respeto por la dignidad del paciente.",
      incluye:["Asistencia en ducha o baño con privacidad","Apoyo en higiene personal diaria","Prevención de caídas en el baño","Cuidado de la piel e hidratación","Uso seguro de elementos de apoyo","Trato digno y respetuoso"]
    },
    {
      icono:"movilidad", imagen:"/img/service-08.jpg", titulo:"Asistencia en Movilidad",
      desc:"Apoyo en desplazamientos, cambios de posición y movilización dentro del hogar para prevenir caídas y favorecer la independencia.",
      incluye:["Apoyo para caminar dentro del hogar","Traslados seguros cama-silla","Ejercicios de movilidad guiados","Uso correcto de ayudas técnicas","Prevención de caídas","Acompañamiento en desplazamientos cortos"]
    },
    {
      icono:"cerebro", imagen:"/img/service-09.png", titulo:"Estimulación Cognitiva",
      desc:"Realizamos actividades enfocadas en fortalecer la memoria, la atención, la concentración, la orientación y el razonamiento. Especialmente recomendadas para adultos mayores y pacientes con deterioro cognitivo leve.",
      incluye:[
        "Memoria.",
        "Atención.",
        "Concentración.",
        "Orientación.",
        "Razonamiento."
      ]
    },
    {
      icono:"ludico", imagen:"/img/service-11.png", titulo:"Actividades Lúdicas",
      desc:"Promovemos el bienestar emocional mediante actividades recreativas que favorecen la integración, la autoestima y una mejor calidad de vida.",
      incluyeTitulo:"Incluyen:",
      incluye:[
        "Juegos de mesa.",
        "Lectura.",
        "Manualidades.",
        "Música.",
        "Conversación guiada.",
        "Dinámicas recreativas."
      ]
    }
  ],

  porQueElegirnos: [
    { icono:"corazon", titulo:"Atención personalizada según las necesidades de cada paciente." },
    { icono:"enfermera", titulo:"Profesionales y auxiliares de enfermería altamente calificados." },
    { icono:"manos", titulo:"Atención en la comodidad del hogar." },
    { icono:"estrella", titulo:"Calidad, seguridad y calidez humana." },
    { icono:"escudo", titulo:"Cumplimiento de protocolos de bioseguridad." },
    { icono:"reloj", titulo:"Puntualidad y compromiso." },
    { icono:"grupo", titulo:"Comunicación permanente con la familia." },
    { icono:"check", titulo:"Atención integral para pacientes de todas las edades." },
    { icono:"docs", titulo:"Acompañamiento continuo y seguimiento profesional." },
    { icono:"reloj", titulo:"Servicios flexibles por horas, jornadas o según requerimiento." }
  ],

  testimonios: [
    { nombre:"María Elena Restrepo", rol:"Familiar de paciente — Envigado", texto:"El acompañamiento que le dieron a mi mamá fue excepcional. Puntuales, cálidos y muy profesionales en cada visita.", inicial:"M", foto:"/img/avatar-1.jpg" },
    { nombre:"Jorge Iván Muñoz", rol:"Paciente — Medellín", texto:"Las curaciones post-operatorias las hicieron con muchísimo cuidado. Me sentí en manos seguras todo el proceso.", inicial:"J", foto:"/img/avatar-2.jpg" },
    { nombre:"Luz Adriana Gómez", rol:"Familiar de paciente — Sabaneta", texto:"La tranquilidad de saber que mi papá está bien cuidado en casa no tiene precio. Gracias ASISTMED.", inicial:"L", foto:"/img/avatar-3.jpg" }
  ],

  faq: [
    { q:"¿Qué es ASISTMED Medicina Asistida?", r:"ASISTMED Medicina Asistida es nuestro servicio de salud a domicilio en Medellín y el Valle de Aburrá: enfermería, inyectología, curaciones y cuidado integral en casa con personal certificado." },
    { q:"¿En qué zonas prestan el servicio?", r:"Atendemos en Medellín, Bello, Envigado, Sabaneta, Itagüí, La Estrella, Copacabana, Girardota y Barbosa." },
    { q:"¿El personal está certificado?", r:"Sí, todo nuestro equipo de enfermería y cuidadores cuenta con formación certificada y verificación de antecedentes." },
    { q:"¿Puedo solicitar un servicio por horas?", r:"Sí, contamos con planes por horas, por día o programas de acompañamiento permanente según la necesidad del paciente." },
    { q:"¿Cómo se agenda una visita?", r:"Puedes escribirnos por WhatsApp o diligenciar el formulario de contacto y te confirmaremos disponibilidad en menos de 24 horas." },
    { q:"¿Manejan servicios de urgencia?", r:"Contamos con disponibilidad ampliada para solicitudes prioritarias; contáctanos directamente para evaluar el caso." }
  ]
};

/* ==========================================================================
   RENDERIZADO DINÁMICO
   ========================================================================== */
function icon(name, extraAttrs=''){
  return `<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ${extraAttrs}>${ASISTMED_DATA.iconos[name] || ''}</svg>`;
}

function renderApproach(){
  const grid = document.getElementById('approachGrid');
  grid.innerHTML = ASISTMED_DATA.enfoque.map(item => `
    <div class="approach-card reveal zoom">
      <span class="card-icon">${icon(item.icono)}</span>
      <h4>${item.titulo}</h4>
      <p>${item.desc}</p>
    </div>
  `).join('');
}

function renderServices(){
  const grid = document.getElementById('servicesGrid');
  grid.innerHTML = ASISTMED_DATA.servicios.map((item, i) => `
    <article class="service-card reveal zoom" data-service-index="${i}" role="button" tabindex="0" aria-label="Ver detalles de ${item.titulo}">
      <img src="${item.imagen}" alt="${item.titulo}" class="service-image" loading="lazy" width="400" height="260">
      <div class="service-body">
        <h3>${item.titulo}</h3>
        <p>${item.desc}</p>
        <button type="button" class="service-link" data-service-index="${i}">
          Ver más
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>
    </article>
  `).join('');
}

function openServiceModal(index){
  const service = ASISTMED_DATA.servicios[index];
  if (!service) return;

  const modal = document.getElementById('serviceModal');
  const img = document.getElementById('serviceModalImg');
  const iconEl = document.getElementById('serviceModalIcon');
  const title = document.getElementById('serviceModalTitle');
  const desc = document.getElementById('serviceModalDesc');
  const aviso = document.getElementById('serviceModalAviso');
  const listTitle = document.getElementById('serviceModalListTitle');
  const list = document.getElementById('serviceModalList');
  const contactBtn = document.getElementById('serviceModalContact');
  const waBtn = document.getElementById('serviceModalWhatsapp');

  img.src = service.imagen;
  img.alt = service.titulo;
  iconEl.innerHTML = icon(service.icono);
  title.textContent = service.titulo;
  desc.textContent = service.desc;
  if (service.aviso) {
    aviso.textContent = service.aviso;
    aviso.hidden = false;
  } else {
    aviso.textContent = '';
    aviso.hidden = true;
  }
  listTitle.textContent = service.incluyeTitulo || '¿Qué incluye este servicio?';
  list.innerHTML = service.incluye.map(item => `
    <li>
      <span class="service-modal__check" aria-hidden="true">${icon('check', 'stroke="#0D6EFD"')}</span>
      ${item}
    </li>
  `).join('');

  const waText = encodeURIComponent(`Hola, me interesa el servicio: ${service.titulo}`);
  contactBtn.href = '#contacto';
  waBtn.href = `https://wa.me/${ASISTMED_DATA.whatsapp}?text=${waText}`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('serviceModalClose').focus();
}

function closeServiceModal(){
  const modal = document.getElementById('serviceModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
}

function renderServicesListModal(){
  const list = document.getElementById('servicesListModalList');
  if (!list) return;

  list.innerHTML = ASISTMED_DATA.servicios.map((item, i) => `
    <li>
      <button type="button" class="services-list-modal__item" data-service-index="${i}">
        <span class="services-list-modal__num">${String(i + 1).padStart(2, '0')}</span>
        <span class="services-list-modal__icon" aria-hidden="true">${icon(item.icono)}</span>
        <span class="services-list-modal__info">
          <strong>${item.titulo}</strong>
          <small>${item.desc}</small>
        </span>
        <svg class="services-list-modal__arrow" viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
      </button>
    </li>
  `).join('');
}

function openServicesListModal(){
  const modal = document.getElementById('servicesListModal');
  if (!modal) return;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  document.getElementById('servicesListModalClose')?.focus();
}

function closeServicesListModal(){
  const modal = document.getElementById('servicesListModal');
  if (!modal) return;

  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  document.getElementById('servicesListTrigger')?.focus();
}

function initServicesListModal(){
  const modal = document.getElementById('servicesListModal');
  const trigger = document.getElementById('servicesListTrigger');
  const list = document.getElementById('servicesListModalList');
  if (!modal || !trigger || !list) return;

  renderServicesListModal();

  trigger.addEventListener('click', openServicesListModal);

  modal.querySelectorAll('[data-close-services-list]').forEach(el => {
    el.addEventListener('click', closeServicesListModal);
  });

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-service-index]');
    if (!btn) return;
    closeServicesListModal();
    openServiceModal(parseInt(btn.dataset.serviceIndex, 10));
  });
}

function initServiceModal(){
  const modal = document.getElementById('serviceModal');
  const grid = document.getElementById('servicesGrid');

  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-service-index]');
    if (!btn) return;
    e.preventDefault();
    openServiceModal(parseInt(btn.dataset.serviceIndex, 10));
  });

  grid.addEventListener('keydown', (e) => {
    const card = e.target.closest('.service-card[data-service-index]');
    if (!card || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    openServiceModal(parseInt(card.dataset.serviceIndex, 10));
  });

  modal.querySelectorAll('[data-close-modal]').forEach(el => {
    el.addEventListener('click', closeServiceModal);
  });

  document.getElementById('serviceModalContact').addEventListener('click', closeServiceModal);

  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    const detailModal = document.getElementById('serviceModal');
    const listModal = document.getElementById('servicesListModal');
    if (detailModal?.classList.contains('open')) closeServiceModal();
    else if (listModal?.classList.contains('open')) closeServicesListModal();
  });
}

function renderWhy(){
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = ASISTMED_DATA.porQueElegirnos.map(item => `
    <div class="why-item reveal">
      <span class="card-icon">${icon(item.icono)}</span>
      <h4>${item.titulo}</h4>
      ${item.desc ? `<p>${item.desc}</p>` : ''}
    </div>
  `).join('');
}

function renderTestimonials(){
  const slides = document.getElementById('testiSlides');
  const dots = document.getElementById('testiDots');
  slides.innerHTML = ASISTMED_DATA.testimonios.map(t => `
    <div class="testi-slide">
      <div class="testi-card">
        <div class="testi-stars">${'<svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .9-4.5 4.4 1 6.2L12 16.8 6.5 19.5l1-6.2L3 8.9 9 8z"/></svg>'.repeat(5)}</div>
        <p class="testi-quote">"${t.texto}"</p>
        <div class="testi-avatar"><img src="${t.foto}" alt="Foto de ${t.nombre}" loading="lazy" width="60" height="60"></div>
        <p class="testi-name">${t.nombre}</p>
        <p class="testi-role">${t.rol}</p>
      </div>
    </div>
  `).join('');
  dots.innerHTML = ASISTMED_DATA.testimonios.map((_, i) => `<button aria-label="Testimonio ${i+1}" data-index="${i}" class="${i===0?'active':''}"></button>`).join('');
}

function getFaqItems() {
  if (window.ASISTMED_CONFIG?.faq?.length) {
    return window.ASISTMED_CONFIG.faq;
  }
  return ASISTMED_DATA.faq;
}

function renderFaq(){
  const list = document.getElementById('faqList');
  list.innerHTML = getFaqItems().map((item, i) => `
    <div class="faq-item reveal" data-index="${i}">
      <button class="faq-question" aria-expanded="false">
        ${item.q}
        <span class="plus"><svg viewBox="0 0 24 24" fill="none" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">${item.r}</div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   INTERACCIONES
   ========================================================================== */
function renderMobileNavServices(){
  const submenu = document.getElementById('navMobileServices');
  if (!submenu) return;

  submenu.innerHTML = ASISTMED_DATA.servicios.map((item, i) => `
    <li>
      <button type="button" class="nav-mobile__submenu-link" data-mobile-service="${i}">
        ${item.titulo}
      </button>
    </li>
  `).join('');
}

function initNavbar(){
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  const servicesToggle = document.getElementById('navMobileServicesToggle');
  const servicesSubmenu = document.getElementById('navMobileServices');
  if (!nav || !toggle || !mobile) return;

  renderMobileNavServices();

  const closeServicesSubmenu = () => {
    if (!servicesToggle || !servicesSubmenu) return;
    servicesToggle.classList.remove('open');
    servicesToggle.setAttribute('aria-expanded', 'false');
    servicesSubmenu.classList.remove('is-open');
  };

  const closeMenu = () => {
    toggle.classList.remove('open');
    mobile.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    mobile.setAttribute('aria-hidden', 'true');
    closeServicesSubmenu();
  };

  const openMenu = () => {
    toggle.classList.add('open');
    mobile.classList.add('open');
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    mobile.setAttribute('aria-hidden', 'false');
  };

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  toggle.addEventListener('click', () => {
    if (toggle.classList.contains('open')) closeMenu();
    else openMenu();
  });

  servicesToggle?.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const isOpen = !servicesToggle.classList.contains('open');
    servicesToggle.classList.toggle('open', isOpen);
    servicesToggle.setAttribute('aria-expanded', String(isOpen));
    servicesSubmenu?.classList.toggle('is-open', isOpen);
  });

  mobile.addEventListener('click', (e) => {
    const serviceBtn = e.target.closest('[data-mobile-service]');
    if (serviceBtn) {
      e.preventDefault();
      const index = parseInt(serviceBtn.dataset.mobileService, 10);
      closeMenu();
      document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      openServiceModal(index);
      return;
    }

    if (e.target.closest('.nav-mobile__toggle')) return;

    const link = e.target.closest('a[href]');
    if (link) closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
}

function initReveal(){
  const items = document.querySelectorAll('.reveal:not(.in)');
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const el = entry.target;
        const delay = parseInt(el.dataset.delay, 10) || 0;
        const show = () => {
          el.classList.add('in');
          observer.unobserve(el);
        };
        if (delay > 0) setTimeout(show, delay);
        else show();
      }
    });
  }, {
    threshold: isMobile ? 0.05 : 0.15,
    rootMargin: isMobile ? '0px 0px 8% 0px' : '0px'
  });
  items.forEach(el => observer.observe(el));
}

function initCounters(){
  const counters = document.querySelectorAll('.counter');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start = performance.now();
        function tick(now){
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target).toLocaleString('es-CO') + suffix;
          if (progress < 1) requestAnimationFrame(tick);
          else el.textContent = target.toLocaleString('es-CO') + suffix;
        }
        requestAnimationFrame(tick);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach(c => observer.observe(c));
}

function initTestimonials(){
  const track = document.getElementById('testiSlides');
  const dots = document.querySelectorAll('#testiDots button');
  let index = 0;
  const total = ASISTMED_DATA.testimonios.length;

  function goTo(i){
    index = (i + total) % total;
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((d, di) => d.classList.toggle('active', di === index));
  }

  dots.forEach(d => d.addEventListener('click', () => { goTo(parseInt(d.dataset.index, 10)); resetAuto(); }));

  let auto = setInterval(() => goTo(index + 1), 5500);
  function resetAuto(){ clearInterval(auto); auto = setInterval(() => goTo(index + 1), 5500); }
}

function initFaq(){
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-answer').style.maxHeight = null;
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen){
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initForm(){
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  if (!form || !status) return;

  const contactCfg = window.ASISTMED_CONTACT || {};
  const accessKey =
    form.dataset.accessKey ||
    contactCfg.accessKey ||
    'bfd1f268-385a-45ed-be74-60f176c7a3b3';
  const submitBtn = form.querySelector('#contactSubmitBtn');
  const labelEl = submitBtn?.querySelector('.btn-label');
  const defaultLabel = labelEl?.textContent || 'Enviar Solicitud';

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!accessKey){
      status.textContent = 'El formulario no está disponible temporalmente.';
      status.style.color = '#DC2626';
      return;
    }

    if (form.botcheck?.checked){
      status.textContent = '¡Gracias! Hemos recibido tu solicitud, te contactaremos pronto.';
      status.style.color = '#0D6EFD';
      form.reset();
      return;
    }

    if (!form.checkValidity()){
      status.textContent = 'Por favor completa todos los campos correctamente.';
      status.style.color = '#DC2626';
      return;
    }

    if (submitBtn){
      submitBtn.disabled = true;
      if (labelEl) labelEl.textContent = 'Enviando...';
    }
    status.textContent = '';
    status.style.color = '';

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('name', form.nombre.value.trim());
    formData.append('email', form.correo.value.trim());
    formData.append('phone', form.telefono.value.trim());
    formData.append('message', form.mensaje.value.trim());
    formData.append('subject', 'Nueva solicitud — ASISTMED Medicina Asistida');
    formData.append('from_name', 'ASISTMED Medicina Asistida Web');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      const successMessage = data.message || data.body?.message;
      const isSuccess = data.success === true;

      if (response.ok && isSuccess){
        status.textContent = '¡Gracias! Hemos recibido tu solicitud, te contactaremos pronto.';
        status.style.color = '#0D6EFD';
        form.reset();
      } else {
        status.textContent = successMessage || 'No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos por WhatsApp.';
        status.style.color = '#DC2626';
      }
    } catch {
      status.textContent = 'Error de conexión. Revisa tu internet e intenta de nuevo.';
      status.style.color = '#DC2626';
    } finally {
      if (submitBtn){
        submitBtn.disabled = false;
        if (labelEl) labelEl.textContent = defaultLabel;
      }
    }
  });
}

function initYear(){
  document.getElementById('year').textContent = new Date().getFullYear();
}

const COVERAGE_AREAS = [
  { name: 'Medellín', lat: 6.2476, lng: -75.5658, principal: true },
  { name: 'Bello', lat: 6.3373, lng: -75.5580 },
  { name: 'Envigado', lat: 6.1759, lng: -75.5917 },
  { name: 'Sabaneta', lat: 6.1519, lng: -75.6162 },
  { name: 'Itagüí', lat: 6.1714, lng: -75.6130 },
  { name: 'La Estrella', lat: 6.1577, lng: -75.6431 },
  { name: 'Copacabana', lat: 6.3464, lng: -75.5089 },
  { name: 'Girardota', lat: 6.3794, lng: -75.4486 },
  { name: 'Barbosa', lat: 6.4381, lng: -75.3314 }
];

function initCoverageMap(){
  const mapEl = document.getElementById('coverageMap');
  if (!mapEl || typeof L === 'undefined' || mapEl.dataset.initialized) return;

  const map = L.map('coverageMap', {
    scrollWheelZoom: false,
    zoomControl: true
  }).setView([6.2518, -75.5636], 11);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
  }).addTo(map);

  const markerIcon = L.divIcon({
    className: 'coverage-marker',
    html: '<span class="coverage-marker__dot"></span>',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -12]
  });

  const markers = {};

  COVERAGE_AREAS.forEach(area => {
    const marker = L.marker([area.lat, area.lng], { icon: markerIcon })
      .addTo(map)
      .bindPopup(`<strong>${area.name}</strong><br><span>Cobertura ASISTMED disponible</span>`);

    if (area.principal) {
      L.circle([area.lat, area.lng], {
        radius: 4500,
        color: '#0D6EFD',
        fillColor: '#0D6EFD',
        fillOpacity: 0.08,
        weight: 2
      }).addTo(map);
    }

    markers[area.name] = marker;
  });

  document.querySelectorAll('.coverage-list li[data-municipio]').forEach(li => {
    const focusMunicipio = () => {
      const name = li.dataset.municipio;
      const area = COVERAGE_AREAS.find(item => item.name === name);
      const marker = markers[name];
      if (!area || !marker) return;

      document.querySelectorAll('.coverage-list li.active').forEach(item => item.classList.remove('active'));
      li.classList.add('active');
      map.flyTo([area.lat, area.lng], 13, { duration: 1.1 });
      marker.openPopup();
    };

    li.addEventListener('click', focusMunicipio);
    li.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        focusMunicipio();
      }
    });
  });

  mapEl.dataset.initialized = 'true';

  const resizeObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => map.invalidateSize(), 150);
      resizeObserver.disconnect();
    }
  }, { threshold: 0.2 });

  resizeObserver.observe(mapEl);
}

document.addEventListener('DOMContentLoaded', () => {
  renderApproach();
  renderServices();
  renderWhy();
  renderTestimonials();
  renderFaq();

  initNavbar();
  initReveal();
  initCounters();
  initTestimonials();
  initFaq();
  initForm();
  initYear();
  initServiceModal();
  initServicesListModal();
  initCoverageMap();

  // Vuelve a activar el observer de reveal sobre los nodos recién inyectados
  initReveal();
});
