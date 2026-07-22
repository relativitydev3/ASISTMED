/* ==========================================================================
   DATOS DE LA PÁGINA
   Objeto centralizado — pensado para reemplazarse a futuro por datos
   provenientes de una API / base de datos (MySQL) vía Express.
   ========================================================================== */
const ASISTMED_DATA = {
  whatsapp: "573246879234",

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
      icono:"manos", imagen:"/img/service-01.jpg", titulo:"Cuidado Integral Adulto Mayor",
      desc:"Acompañamiento completo para el bienestar diario de personas mayores en su hogar.",
      incluye:["Valoración inicial del estado de salud","Acompañamiento en actividades diarias","Administración de medicamentos","Control de signos vitales","Apoyo en alimentación e hidratación","Comunicación constante con la familia"]
    },
    {
      icono:"jeringa", imagen:"/img/service-02.jpg", titulo:"Inyectología",
      desc:"Aplicación segura de inyecciones intramusculares, subcutáneas e intravenosas.",
      incluye:["Inyecciones intramusculares y subcutáneas","Inyecciones intravenosas según indicación médica","Manejo de insumos estériles","Registro detallado de cada aplicación","Disposición segura del material usado","Profesional certificado en cada visita"]
    },
    {
      icono:"pastilla", imagen:"/img/service-03.jpg", titulo:"Aplicación de Medicamentos",
      desc:"Suministro controlado de medicamentos según prescripción médica.",
      incluye:["Administración según horario prescrito","Control de dosis y vía de administración","Registro de medicación suministrada","Verificación de la prescripción médica","Alertas a la familia sobre cambios","Seguimiento de reacciones adversas"]
    },
    {
      icono:"curacion", imagen:"/img/service-04.jpg", titulo:"Curaciones",
      desc:"Manejo profesional de heridas, úlceras y procedimientos post-quirúrgicos.",
      incluye:["Limpieza y desinfección de heridas","Cambio de apósitos y vendajes","Manejo de úlceras por presión","Seguimiento post-quirúrgico","Evaluación de signos de infección","Educación al paciente y a la familia"]
    },
    {
      icono:"balanza", imagen:"/img/service-05.jpg", titulo:"Tratamientos Sobrepeso",
      desc:"Programas de acompañamiento nutricional y seguimiento de peso.",
      incluye:["Seguimiento de peso y medidas corporales","Plan de alimentación supervisado","Registro de progreso periódico","Acompañamiento en hábitos saludables","Motivación y apoyo continuo","Coordinación con profesionales de salud"]
    },
    {
      icono:"corazon", imagen:"/img/service-06.jpg", titulo:"Acompañamiento",
      desc:"Compañía permanente para pacientes que requieren supervisión continua.",
      incluye:["Supervisión continua en el hogar","Compañía y contención emocional","Vigilancia de la seguridad del paciente","Apoyo en actividades cotidianas","Reportes periódicos a la familia","Atención respetuosa y humanizada"]
    },
    {
      icono:"banio", imagen:"/img/service-07.jpg", titulo:"Acompañamiento en Baño",
      desc:"Asistencia respetuosa en higiene personal diaria.",
      incluye:["Asistencia en ducha o baño con privacidad","Apoyo en higiene personal diaria","Prevención de caídas en el baño","Cuidado de la piel e hidratación","Uso seguro de elementos de apoyo","Trato digno y respetuoso"]
    },
    {
      icono:"movilidad", imagen:"/img/service-08.jpg", titulo:"Asistencia en Movilidad",
      desc:"Apoyo para desplazamientos seguros dentro y fuera del hogar.",
      incluye:["Apoyo para caminar dentro del hogar","Traslados seguros cama-silla","Ejercicios de movilidad guiados","Uso correcto de ayudas técnicas","Prevención de caídas","Acompañamiento en desplazamientos cortos"]
    },
    {
      icono:"cerebro", imagen:"/img/service-09.jpg", titulo:"Estimulación Cognitiva",
      desc:"Actividades diseñadas para mantener activa la mente.",
      incluye:["Actividades de memoria y atención","Ejercicios de orientación temporal","Juegos y dinámicas mentales","Lectura y conversación guiada","Seguimiento de avances cognitivos","Plan adaptado a cada paciente"]
    },
    {
      icono:"fisico", imagen:"/img/service-10.jpg", titulo:"Actividades Físicas",
      desc:"Rutinas de movimiento adaptadas a cada capacidad física.",
      incluye:["Rutinas adaptadas a la condición del paciente","Ejercicios de flexibilidad y fuerza","Movilización articular supervisada","Caminatas guiadas y seguras","Prevención del sedentarismo","Progresión según capacidades"]
    },
    {
      icono:"ludico", imagen:"/img/service-11.jpg", titulo:"Actividades Lúdicas",
      desc:"Espacios de entretenimiento y esparcimiento personalizado.",
      incluye:["Entretenimiento personalizado","Juegos de mesa y manualidades","Música y actividades de recuerdo","Estimulación emocional positiva","Actividades al aire libre (si aplica)","Compañía agradable y motivadora"]
    },
    {
      icono:"peptido", imagen:"/img/service-12.jpg", titulo:"Programa de Optimización y Terapias con Péptidos",
      desc:"Programa integral de bienestar y terapias avanzadas supervisado por profesionales.",
      incluye:["Evaluación inicial personalizada","Plan de terapias supervisado","Seguimiento clínico periódico","Educación sobre el tratamiento","Coordinación con el equipo médico","Acompañamiento integral del paciente"]
    }
  ],

  porQueElegirnos: [
    { icono:"enfermera", titulo:"Personal certificado", desc:"Profesionales de la salud verificados y en constante formación." },
    { icono:"reloj", titulo:"Disponibilidad flexible", desc:"Horarios adaptados a las necesidades de cada familia." },
    { icono:"escudo", titulo:"Protocolos de bioseguridad", desc:"Cumplimiento estricto de normas de higiene y seguridad." },
    { icono:"grupo", titulo:"Acompañamiento familiar", desc:"Te mantenemos informado en cada paso del proceso." },
    { icono:"corazon", titulo:"Atención humanizada", desc:"Cuidamos con respeto, empatía y calidez genuina." },
    { icono:"check", titulo:"Seguimiento clínico", desc:"Registro y control de la evolución de cada paciente." },
    { icono:"movilidad", titulo:"Cobertura amplia", desc:"Presencia en 9 municipios del Valle de Aburrá." },
    { icono:"estrella", titulo:"Experiencia comprobada", desc:"Más de 8 años acompañando familias en Antioquia." }
  ],

  testimonios: [
    { nombre:"María Elena Restrepo", rol:"Familiar de paciente — Envigado", texto:"El acompañamiento que le dieron a mi mamá fue excepcional. Puntuales, cálidos y muy profesionales en cada visita.", inicial:"M", foto:"/img/avatar-1.jpg" },
    { nombre:"Jorge Iván Muñoz", rol:"Paciente — Medellín", texto:"Las curaciones post-operatorias las hicieron con muchísimo cuidado. Me sentí en manos seguras todo el proceso.", inicial:"J", foto:"/img/avatar-2.jpg" },
    { nombre:"Luz Adriana Gómez", rol:"Familiar de paciente — Sabaneta", texto:"La tranquilidad de saber que mi papá está bien cuidado en casa no tiene precio. Gracias ASISTMED.", inicial:"L", foto:"/img/avatar-3.jpg" }
  ],

  faq: [
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
  const list = document.getElementById('serviceModalList');
  const contactBtn = document.getElementById('serviceModalContact');
  const waBtn = document.getElementById('serviceModalWhatsapp');

  img.src = service.imagen;
  img.alt = service.titulo;
  iconEl.innerHTML = icon(service.icono);
  title.textContent = service.titulo;
  desc.textContent = service.desc;
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
    if (e.key === 'Escape' && modal.classList.contains('open')) closeServiceModal();
  });
}

function renderWhy(){
  const grid = document.getElementById('whyGrid');
  grid.innerHTML = ASISTMED_DATA.porQueElegirnos.map(item => `
    <div class="why-item reveal">
      <span class="card-icon">${icon(item.icono)}</span>
      <h4>${item.titulo}</h4>
      <p>${item.desc}</p>
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

function renderFaq(){
  const list = document.getElementById('faqList');
  list.innerHTML = ASISTMED_DATA.faq.map((item, i) => `
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
function initNavbar(){
  const nav = document.getElementById('navbar');
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

  toggle.addEventListener('click', () => {
    const open = toggle.classList.toggle('open');
    mobile.classList.toggle('open', open);
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', open);
  });

  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    toggle.classList.remove('open');
    mobile.classList.remove('open');
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function initReveal(){
  const items = document.querySelectorAll('.reveal');
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
  }, { threshold: 0.15 });
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
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()){
      status.textContent = 'Por favor completa todos los campos correctamente.';
      status.style.color = '#DC2626';
      return;
    }
    // Preparado para conectarse a un endpoint Express / base de datos MySQL.
    status.textContent = '¡Gracias! Hemos recibido tu solicitud, te contactaremos pronto.';
    status.style.color = '#0D6EFD';
    form.reset();
  });
}

function initYear(){
  document.getElementById('year').textContent = new Date().getFullYear();
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

  // Vuelve a activar el observer de reveal sobre los nodos recién inyectados
  initReveal();
});
