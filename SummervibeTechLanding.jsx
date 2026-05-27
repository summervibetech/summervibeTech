import React, { useState, useEffect } from 'react';

const translations = {
  en: {
    navLinks: [
      { label: 'Services', href: '#services' },
      { label: 'AI Agents', href: '#ai-agents' },
      { label: 'Who We Help', href: '#who' },
      { label: 'Process', href: '#process' },
      { label: 'Packages', href: '#packages' },
    ],
    startProject: 'Start a Project',
    heroBadge: 'Now booking — anytime & into next year',
    heroH1a: 'Modern websites, apps, and',
    heroH1accent: 'AI agents',
    heroH1b: 'for real businesses.',
    heroP: 'Summervibe Tech builds practical, premium digital products for restaurants, small businesses, students, and professionals — without the agency overhead or long-term contracts.',
    heroCta1: 'Start a Project',
    heroCta2: 'Explore Services',
    featureTitles: [
      { title: 'AI Agents, Built In', desc: '24/7 customer support, booking, and lead capture — trained on your business and live in days.' },
      { title: 'Every Screen, Every Device', desc: 'Designed for phones, tablets, and desktops equally — fast-loading, pixel-perfect, and built to perform everywhere.' },
      { title: 'No Long Contracts', desc: 'Project-based, transparent pricing. Hire us for what you need — no retainers, no lock-in.' },
      { title: 'Fast Turnaround', desc: 'From first conversation to live product in weeks — clear milestones, honest timelines, no surprises.' },
      { title: 'Design That Converts', desc: 'Every pixel serves a purpose — clean, modern, and built to turn visitors into customers.' },
    ],
    servicesLabel: 'What We Build',
    servicesH2: 'Services shaped to how you actually work.',
    servicesP: 'From a single landing page to a full custom app with AI built in — we scope to your goals, not a template.',
    services: [
      { title: 'Website Design & Development', desc: 'Mobile-first, responsive sites that load fast and convert. Built around your real goals, not template bloat.', icon: 'web' },
      { title: 'Restaurant Websites & Apps', desc: 'Online menus, ordering flows, reservation pages, and AI ordering assistants — purpose-built for hospitality.', icon: 'restaurant' },
      { title: 'Mobile App Development', desc: 'Native-feeling apps for iOS and Android. From MVP to launch, with a clear roadmap at every step.', icon: 'mobile' },
      { title: 'Custom Software & Dashboards', desc: 'Internal tools, admin panels, booking systems, and workflows shaped to how your business actually runs.', icon: 'dashboard' },
      { title: 'Portfolio Websites', desc: 'For students, job seekers, and creatives. A clean, professional presence that helps your work get noticed.', icon: 'portfolio' },
      { title: 'Website & App Enhancement', desc: 'Already shipped? We redesign, optimize, and modernize existing products without starting from zero.', icon: 'enhance' },
      { title: 'Real Estate & Construction', desc: 'Property listing sites, contractor portfolios, project showcases, and AI lead capture tools — built to win clients before the first call.', icon: 'realestate' },
    ],
    aiLabel: 'AI Agents',
    aiH2: 'Practical AI that works for you — not the other way around.',
    aiP: 'AI agents are like always-on team members. They answer customer questions, book appointments, capture leads, and handle the repetitive tasks that eat your week — trained on your business, deployed in days.',
    aiCta: 'Get an AI Agent Built',
    aiCapabilities: [
      { title: 'Customer Support Agents', desc: 'Answer questions 24/7 about hours, menu, services, pricing, and policies.' },
      { title: 'Appointment & Booking', desc: 'Schedule consultations, reservations, and service appointments without phone tag.' },
      { title: 'Lead Capture & Qualification', desc: 'Collect customer details, qualify intent, and route warm leads straight to your inbox.' },
      { title: 'FAQ & Knowledge Agents', desc: 'Trained on your business info to give consistent, accurate answers every time.' },
      { title: 'Order Help & Menu Guidance', desc: 'Walk customers through ordering, recommend items, and handle dietary questions.' },
      { title: 'Workflow Automation', desc: 'Connect forms, email, spreadsheets, and booking tools so admin work runs itself.' },
    ],
    aiExamplesLabel: 'Example agents in the wild',
    aiExamples: [
      'Restaurant menu & hours assistant',
      'Salon booking & service guide',
      'Contractor lead intake form',
      'Portfolio assistant that explains your work',
    ],
    whoLabel: 'Who We Help',
    whoH2: 'Premium quality, built for every budget.',
    personas: [
      { title: 'Restaurants', desc: 'Menus, ordering, reservations, and AI assistants that handle the questions you keep getting.', icon: 'restaurant' },
      { title: 'Small Businesses', desc: 'Websites, dashboards, automations, and AI tools built for operators, not enterprises.', icon: 'shop' },
      { title: 'Students', desc: 'Portfolio sites and resume pages that look like you hired a designer — because you did.', icon: 'student' },
      { title: 'Professionals', desc: 'A polished online presence to showcase your work, attract clients, and stand out.', icon: 'pro' },
    ],
    oneTeamLabel: 'One Team. Everything.',
    oneTeamH2: 'Your complete digital team — under one roof.',
    oneTeamP: 'Design, development, AI, performance, and ongoing support — all handled by one team that knows your business, speaks your language, and stays with you after launch.',
    oneTeamCta: 'Work With Us',
    oneTeamItems: [
      { title: 'Design & Development', desc: 'One team owns your product from wireframe to live site — no hand-off gaps.' },
      { title: 'AI & Automation', desc: 'Agents trained on your business — live in days, not months.' },
      { title: 'Performance & SEO', desc: 'Fast loads, clean code, and search visibility built in from day one.' },
      { title: 'Ongoing Support', desc: 'Updates, fixes, and new features — with fast response and clear pricing.' },
      { title: 'Strategy & Roadmap', desc: 'We help you prioritize what to build now and plan what comes next.' },
      { title: 'One Point of Contact', desc: 'No hand-offs, no confusion. You always know who to talk to.' },
    ],
    whyLabel: 'Why Summervibe',
    whyH2: "You don't need a huge budget to look like you do.",
    whyP: 'Summervibe Tech gives small businesses and individuals practical, project-based technical support — so you can build useful products at the right pace, without the agency tax.',
    benefits: [
      { title: 'Flexible & Project-Based', desc: 'No long contracts or retainers. Hire us for what you need, when you need it.' },
      { title: 'Built for Small Teams', desc: 'We speak operator, not enterprise. Real businesses with real budgets.' },
      { title: 'Practical AI, Not Hype', desc: 'AI agents that actually save you time — trained on your business, deployed in days.' },
      { title: 'Clean Communication', desc: 'You always know what we are building, why, and when it ships.' },
      { title: 'Modern, Premium Design', desc: 'Sites and tools that look like the brand you want to be, not the budget you have.' },
      { title: 'Support After Launch', desc: "Ongoing support that's responsive, transparent, and reasonably priced." },
    ],
    packagesLabel: 'Project Options',
    packagesH2: 'Start small. Build smart.',
    packagesP: "Pick a starting point — we'll scope the rest together.",
    popularBadge: 'POPULAR',
    packages: [
      { name: 'Starter Website', tagline: 'For new businesses, restaurants, students, and portfolios.', features: ['1–5 page responsive site', 'Mobile-first design', 'Contact form', 'Basic SEO', 'Launch support'] },
      { name: 'Business Upgrade', tagline: 'For small businesses ready to modernize what they have.', features: ['Full redesign', 'Booking or ordering flow', 'Performance tuning', 'Mobile optimization', 'Optional AI chat'], popular: true },
      { name: 'AI Agent Setup', tagline: 'For teams that want to save hours every week.', features: ['Agent planning & training', 'Website chat integration', 'Lead capture flow', 'Automation hookups', 'Test & launch'] },
      { name: 'Custom Build', tagline: 'For unique software, apps, and AI-powered ideas.', features: ['Custom web or mobile app', 'Dashboard & admin panel', 'Business automation', 'AI-enhanced features', 'MVP to launch'] },
    ],
    processLabel: 'How It Works',
    processH2: 'A simple path from idea to live.',
    process: [
      { step: '01', title: 'Discover', desc: 'We learn your goals, customers, and constraints.' },
      { step: '02', title: 'Design', desc: 'We sketch the flow, screens, and brand direction.' },
      { step: '03', title: 'Build', desc: 'We develop with check-ins and previews along the way.' },
      { step: '04', title: 'Launch', desc: 'We ship it live with a clean handoff and walkthrough.' },
      { step: '05', title: 'Support', desc: 'We stick around for updates, fixes, and what is next.' },
    ],
    contactBadge: 'Free Consultation',
    contactH2: "Tell us what you're building.",
    contactP: "Drop a message below — describe your idea, what you need help with, or what you'd like to improve. We'll get back to you within one business day.",
    contactItems: [
      'No commitment — just a conversation',
      'Custom scope built around your budget',
      'Quick turnaround from idea to proposal',
    ],
    contactDirectLabel: 'Or reach us directly',
    formName: 'Your Name',
    formNamePlaceholder: 'Summer',
    formEmail: 'Email Address',
    formEmailPlaceholder: 'summer@example.com',
    formService: 'What are you looking for?',
    formServicePlaceholder: 'Select a service...',
    formServiceOptions: [
      { value: 'Website Design & Development', label: 'Website Design & Development' },
      { value: 'Restaurant Website or App', label: 'Restaurant Website or App' },
      { value: 'Mobile App Development', label: 'Mobile App Development' },
      { value: 'Custom Software or Dashboard', label: 'Custom Software or Dashboard' },
      { value: 'Real Estate or Construction Site', label: 'Real Estate or Construction Site' },
      { value: 'AI Agent Setup', label: 'AI Agent Setup' },
      { value: 'Portfolio Website', label: 'Portfolio Website' },
      { value: 'Website Enhancement', label: 'Website Enhancement' },
      { value: 'Not sure yet', label: 'Not sure yet' },
    ],
    formMessage: 'Tell us about your idea or project',
    formMessagePlaceholder: 'Describe what you want to build, improve, or automate. The more detail, the better — budget, timeline, and goals all help.',
    formSubmit: 'Book a free consultation',
    formSubmitting: 'Sending…',
    formSuccess: 'Message sent!',
    formSuccessP: "We'll be in touch as soon as possible.",
    formSuccessReset: 'Send another message',
    formError: 'Something went wrong. Please try again or email us directly.',
    footerTagline: 'Build small. Launch smart. Grow with confidence. Websites, apps, custom software, and AI agents for modern small businesses.',
    footerExplore: 'Explore',
    footerContact: 'Get In Touch',
    footerConsult: 'Book a free consultation',
    footerBookingNote: 'Now booking — anytime & into next year',
    footerServices: 'Websites • Apps • Custom Software • AI Agents • Automations • Portfolios',
    footerCopyright: '© 2026 Summervibe Tech. All rights reserved.',
  },
  es: {
    navLinks: [
      { label: 'Servicios', href: '#services' },
      { label: 'Agentes de AI', href: '#ai-agents' },
      { label: 'A Quién Ayudamos', href: '#who' },
      { label: 'Proceso', href: '#process' },
      { label: 'Paquetes', href: '#packages' },
    ],
    startProject: 'Iniciar Proyecto',
    heroBadge: 'Reservando ahora — en cualquier momento y para el próximo año',
    heroH1a: 'Sitios web modernos, apps y',
    heroH1accent: 'agentes de AI',
    heroH1b: 'para negocios reales.',
    heroP: 'Summervibe Tech crea productos digitales prácticos y de alta calidad para restaurantes, pequeños negocios, estudiantes y profesionales — sin los costos de una agencia ni contratos a largo plazo.',
    heroCta1: 'Iniciar Proyecto',
    heroCta2: 'Ver Servicios',
    featureTitles: [
      { title: 'Agentes de AI Integrados', desc: 'Soporte al cliente 24/7, reservas y captación de leads — entrenados para tu negocio y activos en días.' },
      { title: 'Cada Pantalla, Cada Dispositivo', desc: 'Diseñado para teléfonos, tabletas y escritorios por igual — rápido, perfecto al píxel y listo para rendir en cualquier lugar.' },
      { title: 'Sin Contratos Largos', desc: 'Precios por proyecto, sin sorpresas. Contrátanos para lo que necesitas — sin retención ni dependencias.' },
      { title: 'Entrega Rápida', desc: 'De la primera conversación al producto en vivo en semanas — hitos claros, plazos honestos, sin sorpresas.' },
      { title: 'Diseño Que Convierte', desc: 'Cada píxel tiene un propósito — limpio, moderno y diseñado para convertir visitantes en clientes.' },
    ],
    servicesLabel: 'Lo Que Construimos',
    servicesH2: 'Servicios adaptados a cómo trabajas realmente.',
    servicesP: 'Desde una sola página de aterrizaje hasta una app personalizada con AI — nos adaptamos a tus objetivos, no a una plantilla.',
    services: [
      { title: 'Diseño y Desarrollo de Sitios Web', desc: 'Sitios modernos, rápidos y que convierten. Construidos para tus objetivos reales, no plantillas.', icon: 'web' },
      { title: 'Sitios Web y Apps para Restaurantes', desc: 'Menús en línea, flujos de pedidos, páginas de reservas y asistentes de AI — creados para la hostelería.', icon: 'restaurant' },
      { title: 'Desarrollo de Apps Móviles', desc: 'Apps nativas para iOS y Android. Desde MVP hasta lanzamiento, con una hoja de ruta clara en cada paso.', icon: 'mobile' },
      { title: 'Software Personalizado y Paneles', desc: 'Herramientas internas, paneles de administración, sistemas de reservas y flujos adaptados a tu negocio.', icon: 'dashboard' },
      { title: 'Sitios de Portafolio', desc: 'Para estudiantes, buscadores de empleo y creativos. Una presencia profesional que hace notar tu trabajo.', icon: 'portfolio' },
      { title: 'Mejora de Sitios y Apps', desc: '¿Ya lo tienes? Rediseñamos, optimizamos y modernizamos productos existentes sin empezar desde cero.', icon: 'enhance' },
      { title: 'Bienes Raíces y Construcción', desc: 'Listados de propiedades, portafolios de contratistas, proyectos y herramientas de captación de leads con AI.', icon: 'realestate' },
    ],
    aiLabel: 'Agentes de AI',
    aiH2: 'AI práctica que trabaja para ti — no al revés.',
    aiP: 'Los agentes de AI son como miembros del equipo disponibles siempre. Responden preguntas de clientes, reservan citas, capturan leads y manejan las tareas repetitivas que te consumen la semana — entrenados en tu negocio, activos en días.',
    aiCta: 'Quiero un Agente de AI',
    aiCapabilities: [
      { title: 'Agentes de Soporte al Cliente', desc: 'Responden preguntas 24/7 sobre horarios, menú, servicios, precios y políticas.' },
      { title: 'Citas y Reservas', desc: 'Programan consultas, reservas y citas de servicio sin llamadas telefónicas.' },
      { title: 'Captación y Calificación de Leads', desc: 'Recopilan datos de clientes, califican la intención y envían leads calientes directo a tu bandeja.' },
      { title: 'Agentes de Preguntas Frecuentes', desc: 'Entrenados en tu negocio para dar respuestas consistentes y precisas siempre.' },
      { title: 'Ayuda con Pedidos y Menú', desc: 'Acompañan a los clientes en el proceso de pedido, recomiendan productos y resuelven preguntas dietéticas.' },
      { title: 'Automatización de Flujos de Trabajo', desc: 'Conectan formularios, correo, hojas de cálculo y herramientas de reserva para que el trabajo se maneje solo.' },
    ],
    aiExamplesLabel: 'Ejemplos de agentes en acción',
    aiExamples: [
      'Asistente de menú y horarios de restaurante',
      'Guía de reservas y servicios para salón',
      'Formulario de captación de leads para contratistas',
      'Asistente de portafolio que explica tu trabajo',
    ],
    whoLabel: 'A Quién Ayudamos',
    whoH2: 'Calidad premium, para cualquier presupuesto.',
    personas: [
      { title: 'Restaurantes', desc: 'Menús, pedidos, reservas y asistentes de AI que responden las preguntas que siempre recibes.', icon: 'restaurant' },
      { title: 'Pequeños Negocios', desc: 'Sitios web, paneles, automatizaciones y herramientas de AI para operadores, no para grandes empresas.', icon: 'shop' },
      { title: 'Estudiantes', desc: 'Sitios de portafolio y páginas de currículum que parecen diseñados por un profesional — porque lo son.', icon: 'student' },
      { title: 'Profesionales', desc: 'Una presencia en línea impecable para mostrar tu trabajo, atraer clientes y destacarte.', icon: 'pro' },
    ],
    oneTeamLabel: 'Un Equipo. Todo.',
    oneTeamH2: 'Tu equipo digital completo — bajo un mismo techo.',
    oneTeamP: 'Diseño, desarrollo, AI, rendimiento y soporte continuo — todo manejado por un equipo que conoce tu negocio, habla tu idioma y se queda contigo después del lanzamiento.',
    oneTeamCta: 'Trabajar con Nosotros',
    oneTeamItems: [
      { title: 'Diseño y Desarrollo', desc: 'Un equipo gestiona tu producto desde el boceto hasta el sitio en vivo — sin brechas de entrega.' },
      { title: 'AI y Automatización', desc: 'Agentes entrenados en tu negocio — activos en días, no meses.' },
      { title: 'Rendimiento y SEO', desc: 'Cargas rápidas, código limpio y visibilidad en buscadores desde el primer día.' },
      { title: 'Soporte Continuo', desc: 'Actualizaciones, correcciones y nuevas funciones — con respuesta rápida y precios claros.' },
      { title: 'Estrategia y Hoja de Ruta', desc: 'Te ayudamos a priorizar qué construir ahora y planificar lo que viene después.' },
      { title: 'Un Solo Punto de Contacto', desc: 'Sin traslados, sin confusión. Siempre sabes con quién hablar.' },
    ],
    whyLabel: '¿Por Qué Summervibe?',
    whyH2: 'No necesitas un presupuesto enorme para parecer que sí lo tienes.',
    whyP: 'Summervibe Tech le da a pequeños negocios e individuos soporte técnico práctico por proyecto — para que puedas construir productos útiles a tu ritmo, sin el costo de una agencia.',
    benefits: [
      { title: 'Flexible y Por Proyecto', desc: 'Sin contratos largos ni retenciones. Contrátanos para lo que necesitas, cuando lo necesitas.' },
      { title: 'Para Equipos Pequeños', desc: 'Hablamos como operadores, no como empresas. Negocios reales con presupuestos reales.' },
      { title: 'AI Práctica, No Exagerada', desc: 'Agentes de AI que realmente ahorran tiempo — entrenados en tu negocio, activos en días.' },
      { title: 'Comunicación Clara', desc: 'Siempre sabes qué estamos construyendo, por qué y cuándo se lanza.' },
      { title: 'Diseño Moderno y Premium', desc: 'Sitios y herramientas que parecen la marca que quieres ser, no el presupuesto que tienes.' },
      { title: 'Soporte Después del Lanzamiento', desc: 'Soporte continuo responsivo, transparente y a precios razonables.' },
    ],
    packagesLabel: 'Opciones de Proyecto',
    packagesH2: 'Empieza pequeño. Construye con inteligencia.',
    packagesP: 'Elige un punto de partida — juntos definimos el resto.',
    popularBadge: 'POPULAR',
    packages: [
      { name: 'Sitio Inicial', tagline: 'Para nuevos negocios, restaurantes, estudiantes y portafolios.', features: ['Sitio responsivo de 1–5 páginas', 'Diseño mobile-first', 'Formulario de contacto', 'SEO básico', 'Soporte en el lanzamiento'] },
      { name: 'Mejora Empresarial', tagline: 'Para pequeños negocios listos para modernizar lo que tienen.', features: ['Rediseño completo', 'Flujo de reservas o pedidos', 'Optimización de rendimiento', 'Optimización móvil', 'Chat de AI opcional'], popular: true },
      { name: 'Configuración de Agente de AI', tagline: 'Para equipos que quieren ahorrar horas cada semana.', features: ['Planificación y entrenamiento del agente', 'Integración de chat en el sitio', 'Flujo de captación de leads', 'Conexiones de automatización', 'Prueba y lanzamiento'] },
      { name: 'Desarrollo Personalizado', tagline: 'Para software único, apps e ideas potenciadas con AI.', features: ['App web o móvil personalizada', 'Panel y administración', 'Automatización empresarial', 'Funciones con AI', 'De MVP al lanzamiento'] },
    ],
    processLabel: 'Cómo Funciona',
    processH2: 'Un camino simple de la idea al lanzamiento.',
    process: [
      { step: '01', title: 'Descubrir', desc: 'Aprendemos tus objetivos, clientes y limitaciones.' },
      { step: '02', title: 'Diseñar', desc: 'Esbozamos el flujo, las pantallas y la dirección de marca.' },
      { step: '03', title: 'Construir', desc: 'Desarrollamos con revisiones y vistas previas en el camino.' },
      { step: '04', title: 'Lanzar', desc: 'Lo publicamos en vivo con una entrega limpia y un recorrido.' },
      { step: '05', title: 'Apoyar', desc: 'Seguimos aquí para actualizaciones, correcciones y lo que sigue.' },
    ],
    contactBadge: 'Consulta Gratis',
    contactH2: 'Cuéntanos qué estás construyendo.',
    contactP: 'Déjanos un mensaje — describe tu idea, en qué necesitas ayuda o qué te gustaría mejorar. Te respondemos en un día hábil.',
    contactItems: [
      'Sin compromiso — solo una conversación',
      'Alcance personalizado según tu presupuesto',
      'Entrega rápida de la idea a la propuesta',
    ],
    contactDirectLabel: 'O contáctanos directamente',
    formName: 'Tu Nombre',
    formNamePlaceholder: 'Summer',
    formEmail: 'Correo Electrónico',
    formEmailPlaceholder: 'summer@ejemplo.com',
    formService: '¿Qué estás buscando?',
    formServicePlaceholder: 'Selecciona un servicio...',
    formServiceOptions: [
      { value: 'Website Design & Development', label: 'Diseño y Desarrollo de Sitio Web' },
      { value: 'Restaurant Website or App', label: 'Sitio Web o App para Restaurante' },
      { value: 'Mobile App Development', label: 'Desarrollo de App Móvil' },
      { value: 'Custom Software or Dashboard', label: 'Software Personalizado o Panel de Control' },
      { value: 'Real Estate or Construction Site', label: 'Sitio de Bienes Raíces o Construcción' },
      { value: 'AI Agent Setup', label: 'Configuración de Agente de AI' },
      { value: 'Portfolio Website', label: 'Sitio de Portafolio' },
      { value: 'Website Enhancement', label: 'Mejora de Sitio Web' },
      { value: 'Not sure yet', label: 'No estoy seguro/a todavía' },
    ],
    formMessage: 'Cuéntanos sobre tu idea o proyecto',
    formMessagePlaceholder: 'Describe lo que quieres construir, mejorar o automatizar. Más detalles es mejor — presupuesto, plazos y objetivos nos ayudan.',
    formSubmit: 'Reservar consulta gratis',
    formSubmitting: 'Enviando…',
    formSuccess: '¡Mensaje enviado!',
    formSuccessP: 'Nos pondremos en contacto lo antes posible.',
    formSuccessReset: 'Enviar otro mensaje',
    formError: 'Algo salió mal. Por favor intenta de nuevo o escríbenos directamente.',
    footerTagline: 'Empieza pequeño. Lanza con inteligencia. Crece con confianza. Sitios web, apps, software personalizado y agentes de AI para pequeños negocios modernos.',
    footerExplore: 'Explorar',
    footerContact: 'Contáctanos',
    footerConsult: 'Reservar consulta gratis',
    footerBookingNote: 'Reservando ahora — en cualquier momento y para el próximo año',
    footerServices: 'Sitios Web • Apps • Software Personalizado • Agentes de AI • Automatizaciones • Portafolios',
    footerCopyright: '© 2026 Summervibe Tech. Todos los derechos reservados.',
  },
};

export default function SummervibeTechLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  const handleFormChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    setFormError(false);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setFormSent(true);
      } else {
        setFormError(true);
      }
    } catch {
      setFormError(true);
    } finally {
      setFormSubmitting(false);
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const colors = {
    bg: '#FAFAF7',
    surface: '#FFFFFF',
    surfaceAlt: '#F4F2EC',
    ink: '#0D1B2A',
    inkSoft: '#4A5568',
    inkMuted: '#7A8599',
    border: '#E5E2DA',
    accent: '#C2410C',
    accentSoft: '#FED7AA',
    accent2: '#1E3A5F',
  };

  const Icon = ({ name, className = "w-6 h-6", color }) => {
    const stroke = color || colors.accent;
    const icons = {
      web: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect x="3" y="6" width="26" height="20" rx="2.5" stroke={stroke} strokeWidth="2"/>
          <path d="M3 11h26" stroke={stroke} strokeWidth="2"/>
          <circle cx="6.5" cy="8.5" r="0.8" fill={stroke}/>
          <circle cx="9" cy="8.5" r="0.8" fill={stroke}/>
          <path d="M9 17l3 3-3 3M14 23h6" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      restaurant: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M10 4v12a3 3 0 003 3v9M10 4v6M13 4v6M10 10a3 3 0 003 3" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
          <path d="M22 4c-2 0-4 2-4 6s2 6 4 6v12" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      mobile: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect x="9" y="3" width="14" height="26" rx="3" stroke={stroke} strokeWidth="2"/>
          <path d="M14 25h4" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
          <path d="M13 8h6" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      dashboard: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <rect x="4" y="4" width="11" height="11" rx="2" stroke={stroke} strokeWidth="2"/>
          <rect x="17" y="4" width="11" height="7" rx="2" stroke={stroke} strokeWidth="2"/>
          <rect x="4" y="17" width="11" height="11" rx="2" stroke={stroke} strokeWidth="2"/>
          <rect x="17" y="13" width="11" height="15" rx="2" stroke={stroke} strokeWidth="2"/>
        </svg>
      ),
      portfolio: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M4 10a2 2 0 012-2h6l2 3h12a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V10z" stroke={stroke} strokeWidth="2"/>
          <circle cx="16" cy="18" r="3" stroke={stroke} strokeWidth="2"/>
        </svg>
      ),
      enhance: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M16 4l2.5 6.5L25 13l-6.5 2.5L16 22l-2.5-6.5L7 13l6.5-2.5L16 4z" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M24 22l1 2.5L27.5 26 25 27l-1 2.5L23 27l-2.5-1L23 24.5 24 22z" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      ),
      shop: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M4 11l2-5h20l2 5M4 11h24v15a2 2 0 01-2 2H6a2 2 0 01-2-2V11z" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M12 11v4a4 4 0 008 0v-4" stroke={stroke} strokeWidth="2"/>
        </svg>
      ),
      student: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M3 12l13-6 13 6-13 6L3 12z" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M9 15v6c0 2 3 4 7 4s7-2 7-4v-6" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
          <path d="M29 12v7" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      pro: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <circle cx="16" cy="11" r="5" stroke={stroke} strokeWidth="2"/>
          <path d="M5 28c0-6 5-10 11-10s11 4 11 10" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      realestate: (
        <svg viewBox="0 0 32 32" fill="none" className={className}>
          <path d="M4 28V14L16 4l12 10v14" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/>
          <rect x="12" y="20" width="8" height="8" rx="1" stroke={stroke} strokeWidth="2"/>
          <path d="M4 28h24" stroke={stroke} strokeWidth="2" strokeLinecap="round"/>
          <rect x="7" y="15" width="4" height="4" rx="0.5" stroke={stroke} strokeWidth="1.5"/>
          <rect x="21" y="15" width="4" height="4" rx="0.5" stroke={stroke} strokeWidth="1.5"/>
        </svg>
      ),
    };
    return icons[name] || null;
  };

  const LogoMark = ({ size = 28 }) => (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="9" fill={colors.accent}/>
      <g stroke={colors.accent} strokeWidth="2.5" strokeLinecap="round">
        <line x1="20" y1="4" x2="20" y2="9"/>
        <line x1="20" y1="31" x2="20" y2="36"/>
        <line x1="4" y1="20" x2="9" y2="20"/>
        <line x1="31" y1="20" x2="36" y2="20"/>
        <line x1="8.5" y1="8.5" x2="12" y2="12"/>
        <line x1="28" y1="28" x2="31.5" y2="31.5"/>
        <line x1="8.5" y1="31.5" x2="12" y2="28"/>
        <line x1="28" y1="12" x2="31.5" y2="8.5"/>
      </g>
    </svg>
  );

  const LangToggle = () => (
    <button
      onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
      className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold tracking-widest uppercase rounded-lg transition-all"
      style={{ border: `1.5px solid ${colors.ink}`, color: colors.ink, backgroundColor: 'transparent' }}
      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.ink; e.currentTarget.style.color = colors.bg; }}
      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.ink; }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      {lang === 'en' ? 'ES' : 'EN'}
    </button>
  );

  const featureIcons = [
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="9" y="8" width="2" height="8" rx="1" fill={colors.accent}/>
      <rect x="13" y="8" width="2" height="8" rx="1" fill={colors.accent}/>
      <circle cx="12" cy="12" r="10" stroke={colors.accent} strokeWidth="1.5" fill="none"/>
      <path d="M8 11l2.5 2.5L16 8" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="1" y="6" width="13" height="9" rx="1.5" stroke={colors.accent} strokeWidth="1.6"/>
      <path d="M7 17v2M5 19h4" stroke={colors.accent} strokeWidth="1.6" strokeLinecap="round"/>
      <rect x="16" y="10" width="7" height="10" rx="1.2" stroke={colors.accent} strokeWidth="1.6"/>
      <path d="M19 18.5h.01" stroke={colors.accent} strokeWidth="1.8" strokeLinecap="round"/>
    </svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={colors.accent} strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 12l2 2 4-4" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={colors.accent} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
    </svg>,
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" stroke={colors.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ];

  const oneTeamIcons = [
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke={colors.accentSoft} strokeWidth="1.8"/><path d="M3 9h18" stroke={colors.accentSoft} strokeWidth="1.8"/><path d="M8 14l2 2 4-4" stroke={colors.accentSoft} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke={colors.accentSoft} strokeWidth="1.8"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" stroke={colors.accentSoft} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke={colors.accentSoft} strokeWidth="1.8" strokeLinejoin="round"/></svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke={colors.accentSoft} strokeWidth="1.8" strokeLinejoin="round"/></svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M3 12h4l3-8 4 16 3-8h4" stroke={colors.accentSoft} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke={colors.accentSoft} strokeWidth="1.8"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke={colors.accentSoft} strokeWidth="1.8" strokeLinecap="round"/></svg>,
  ];

  return (
    <div
      style={{
        backgroundColor: colors.bg,
        color: colors.ink,
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
      className="min-h-screen w-full overflow-x-hidden antialiased"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        * { font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        h1, h2, h3, h4, h5, h6 { letter-spacing: -0.025em; line-height: 1.15; }
        p { line-height: 1.65; }
        @keyframes fade-up { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .anim-fade-up { animation: fade-up 0.7s ease-out both; }
        @keyframes pulse-soft { 0%, 100% { opacity: 0.7; } 50% { opacity: 1; } }
        .anim-pulse-soft { animation: pulse-soft 3s ease-in-out infinite; }
        html { scroll-behavior: smooth; }
      `}</style>

      {/* ============ NAV ============ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}
        style={{
          backgroundColor: scrolled ? 'rgba(250, 250, 247, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${colors.border}` : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <LogoMark size={28} />
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-bold tracking-tight" style={{ color: colors.ink }}>Summervibe Tech</span>
              <span className="hidden sm:inline text-xs font-medium tracking-wide" style={{ color: colors.inkMuted }}>Digital Studio &amp; Solutions</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {t.navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium transition-colors"
                style={{ color: colors.inkSoft }}
                onMouseEnter={(e) => (e.currentTarget.style.color = colors.ink)}
                onMouseLeave={(e) => (e.currentTarget.style.color = colors.inkSoft)}
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="text-sm font-semibold px-5 py-2.5 rounded-lg transition-all hover:shadow-md"
              style={{ backgroundColor: colors.ink, color: colors.bg }}
            >
              {t.startProject}
            </a>
            <LangToggle />
          </div>

          <button className="md:hidden p-2" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {mobileMenu ? (
                <path d="M6 6l12 12M6 18L18 6" stroke={colors.ink} strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke={colors.ink} strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>

        {mobileMenu && (
          <div
            className="md:hidden mt-3 mx-5 rounded-xl p-5 shadow-lg"
            style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-wide" style={{ color: colors.inkMuted }}>Language</span>
                <LangToggle />
              </div>
              {t.navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setMobileMenu(false)} className="text-base font-medium" style={{ color: colors.ink }}>
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
                className="text-center text-sm font-semibold px-5 py-3 rounded-lg mt-2"
                style={{ backgroundColor: colors.ink, color: colors.bg }}
              >
                {t.startProject}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ============ HERO ============ */}
      <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 px-5 md:px-8 overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${colors.accentSoft}55 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 60%, ${colors.accent}08 0%, transparent 60%)` }}
        />
        <div className="max-w-5xl mx-auto relative text-center">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-8 anim-fade-up"
            style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
          >
            <span className="w-1.5 h-1.5 rounded-full anim-pulse-soft" style={{ backgroundColor: colors.accent }} />
            <span className="text-xs font-semibold tracking-wide" style={{ color: colors.accent }}>{t.heroBadge}</span>
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold anim-fade-up"
            style={{ color: colors.ink, animationDelay: '0.1s', letterSpacing: '-0.035em' }}
          >
            {t.heroH1a}{' '}
            <span style={{ color: colors.accent }}>{t.heroH1accent}</span>{' '}
            {t.heroH1b}
          </h1>

          <p
            className="mt-6 text-lg md:text-xl max-w-2xl mx-auto anim-fade-up"
            style={{ color: colors.inkSoft, animationDelay: '0.25s' }}
          >
            {t.heroP}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center anim-fade-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all hover:shadow-lg"
              style={{ backgroundColor: colors.ink, color: colors.bg }}
            >
              {t.heroCta1}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform group-hover:translate-x-0.5">
                <path d="M4 9h10m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-all"
              style={{ backgroundColor: colors.surface, color: colors.ink, border: `1px solid ${colors.border}` }}
            >
              {t.heroCta2}
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto anim-fade-up" style={{ animationDelay: '0.55s' }}>
            {t.featureTitles.map((f, i) => (
              <div
                key={f.title}
                className="flex flex-col items-center text-center p-6 rounded-2xl"
                style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: colors.accentSoft + '50' }}>
                  {featureIcons[i]}
                </div>
                <div className="text-sm font-bold mb-1" style={{ color: colors.ink }}>{f.title}</div>
                <div className="text-xs leading-relaxed" style={{ color: colors.inkSoft }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="relative py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accent }}>{t.servicesLabel}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold" style={{ color: colors.ink }}>{t.servicesH2}</h2>
              <p className="mt-4 text-base md:text-lg" style={{ color: colors.inkSoft }}>{t.servicesP}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.services.map((s) => (
              <div
                key={s.title}
                className="group p-7 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.accentSoft + '60' }}>
                    <Icon name={s.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: colors.ink }}>{s.title}</h3>
                </div>
                <p className="text-sm" style={{ color: colors.inkSoft }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AI AGENTS ============ */}
      <section id="ai-agents" className="relative py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden p-8 md:p-14 lg:p-16 relative"
            style={{ background: `linear-gradient(135deg, ${colors.ink} 0%, ${colors.accent2} 100%)` }}
          >
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 pointer-events-none"
              style={{ background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)` }}
            />
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start relative">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-6 h-px" style={{ backgroundColor: colors.accentSoft }} />
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accentSoft }}>{t.aiLabel}</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: colors.bg }}>{t.aiH2}</h2>
                <p className="text-base md:text-lg mb-8" style={{ color: '#C5CDD8' }}>{t.aiP}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-md"
                  style={{ backgroundColor: colors.accent, color: colors.bg }}
                >
                  {t.aiCta}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h9m0 0l-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {t.aiCapabilities.map((c, i) => (
                  <div
                    key={c.title}
                    className="p-5 rounded-xl transition-all hover:-translate-y-1"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.12)' }}
                  >
                    <div className="flex sm:block items-center gap-2.5">
                      <div
                        className="w-7 h-7 flex-shrink-0 rounded-md flex items-center justify-center mb-0 sm:mb-3 text-xs font-bold"
                        style={{ backgroundColor: colors.accent, color: colors.bg }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </div>
                      <h3 className="text-base font-bold mb-0 sm:mb-1.5" style={{ color: colors.bg }}>{c.title}</h3>
                    </div>
                    <p className="mt-1.5 sm:mt-0 text-sm" style={{ color: '#A8B2C2' }}>{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 pt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-6" style={{ color: colors.accentSoft }}>{t.aiExamplesLabel}</p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {t.aiExamples.map((ex) => (
                  <div
                    key={ex}
                    className="p-4 rounded-lg text-sm"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', color: colors.bg, border: '1px solid rgba(255, 255, 255, 0.12)' }}
                  >
                    <span style={{ color: colors.accentSoft }}>→</span> <span className="font-medium">{ex}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHO WE HELP ============ */}
      <section id="who" className="py-20 md:py-28 px-5 md:px-8" style={{ backgroundColor: colors.surfaceAlt }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accent }}>{t.whoLabel}</span>
              <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: colors.ink }}>{t.whoH2}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.personas.map((p) => (
              <div
                key={p.title}
                className="p-7 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl flex items-center justify-center" style={{ backgroundColor: colors.accentSoft + '60' }}>
                    <Icon name={p.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: colors.ink }}>{p.title}</h3>
                </div>
                <p className="text-sm" style={{ color: colors.inkSoft }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ONE TEAM ============ */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden relative"
            style={{ background: `linear-gradient(135deg, ${colors.ink} 0%, ${colors.accent2} 100%)` }}
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)` }} />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${colors.accentSoft} 0%, transparent 70%)` }} />
            <div className="relative p-8 md:p-14 lg:p-16">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-6 h-px" style={{ backgroundColor: colors.accentSoft }} />
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accentSoft }}>{t.oneTeamLabel}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: colors.bg }}>{t.oneTeamH2}</h2>
                  <p className="text-base md:text-lg" style={{ color: '#C5CDD8' }}>{t.oneTeamP}</p>
                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:shadow-md"
                      style={{ backgroundColor: colors.accent, color: colors.bg }}
                    >
                      {t.oneTeamCta}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h9m0 0l-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-7 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {t.oneTeamItems.map((item, i) => (
                    <div
                      key={item.title}
                      className="p-5 rounded-xl"
                      style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.10)' }}
                    >
                      <div className="mb-3">{oneTeamIcons[i]}</div>
                      <div className="text-sm font-bold mb-1" style={{ color: colors.bg }}>{item.title}</div>
                      <div className="text-xs leading-relaxed" style={{ color: '#A8B2C2' }}>{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accent }}>{t.whyLabel}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-5" style={{ color: colors.ink }}>{t.whyH2}</h2>
              <p className="text-base md:text-lg" style={{ color: colors.inkSoft }}>{t.whyP}</p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {t.benefits.map((b) => (
                <div
                  key={b.title}
                  className="p-6 rounded-xl"
                  style={{ backgroundColor: colors.surface, border: `1px solid ${colors.border}` }}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: colors.accent }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6.5L4.5 9L10 3" stroke={colors.bg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-base font-bold" style={{ color: colors.ink }}>{b.title}</h3>
                  </div>
                  <p className="text-sm pl-8" style={{ color: colors.inkSoft }}>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PACKAGES ============ */}
      <section id="packages" className="py-20 md:py-28 px-5 md:px-8" style={{ backgroundColor: colors.surfaceAlt }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accent }}>{t.packagesLabel}</span>
              <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ color: colors.ink }}>{t.packagesH2}</h2>
            <p className="mt-5 text-base md:text-lg" style={{ color: colors.inkSoft }}>{t.packagesP}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.packages.map((p) => (
              <div
                key={p.name}
                className="relative p-7 rounded-2xl transition-all hover:-translate-y-1 hover:shadow-lg flex flex-col"
                style={{
                  backgroundColor: p.popular ? colors.ink : colors.surface,
                  color: p.popular ? colors.bg : colors.ink,
                  border: `1px solid ${p.popular ? colors.ink : colors.border}`,
                }}
              >
                {p.popular && (
                  <div
                    className="absolute -top-3 left-6 px-3 py-1 rounded-md text-xs font-bold tracking-wide"
                    style={{ backgroundColor: colors.accent, color: colors.bg }}
                  >
                    {t.popularBadge}
                  </div>
                )}
                <h3 className="text-lg font-bold mb-2">{p.name}</h3>
                <p className="text-sm mb-6" style={{ color: p.popular ? '#A8B2C2' : colors.inkSoft }}>{p.tagline}</p>
                <ul className="space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
                        <path d="M3 8.5L6.5 12L13 5" stroke={colors.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section id="process" className="py-20 md:py-28 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-px" style={{ backgroundColor: colors.accent }} />
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.accent }}>{t.processLabel}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl" style={{ color: colors.ink }}>{t.processH2}</h2>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px" style={{ backgroundColor: colors.border }} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 relative">
              {t.process.map((p) => (
                <div key={p.step} className="text-center">
                  <div
                    className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-5 relative z-10"
                    style={{ backgroundColor: colors.surface, border: `2px solid ${colors.accent}` }}
                  >
                    <span className="text-sm font-bold" style={{ color: colors.accent }}>{p.step}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: colors.ink }}>{p.title}</h3>
                  <p className="text-sm" style={{ color: colors.inkSoft }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section id="contact" className="px-5 md:px-8 pb-20 pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-6 md:p-14 lg:p-16" style={{ backgroundColor: colors.ink }}>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-25 pointer-events-none" style={{ background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)` }} />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${colors.accentSoft} 0%, transparent 70%)` }} />

            <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', color: colors.bg }}
                >
                  <span className="w-1.5 h-1.5 rounded-full anim-pulse-soft" style={{ backgroundColor: colors.accentSoft }} />
                  <span className="text-xs font-bold tracking-wider uppercase">{t.contactBadge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5" style={{ color: colors.bg }}>{t.contactH2}</h2>
                <p className="text-base md:text-lg mb-8" style={{ color: '#C5CDD8' }}>{t.contactP}</p>
                <ul className="space-y-4">
                  {t.contactItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm" style={{ color: '#C5CDD8' }}>
                      <span className="w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6.5L4.5 9L10 3" stroke={colors.bg} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-10 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: '#A8B2C2' }}>{t.contactDirectLabel}</p>
                  <a href="mailto:contact@summervibe.tech" className="text-sm font-medium" style={{ color: colors.accentSoft }}>contact@summervibe.tech</a>
                </div>
              </div>

              <div className="rounded-2xl p-5 md:p-8" style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                {formSent ? (
                  <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.accent }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke={colors.bg} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.bg }}>{t.formSuccess}</h3>
                    <p className="text-sm" style={{ color: '#C5CDD8' }}>{t.formSuccessP}</p>
                    <button
                      onClick={() => { setFormSent(false); setFormData({ name: '', email: '', service: '', message: '' }); }}
                      className="mt-2 text-sm font-semibold underline"
                      style={{ color: colors.accentSoft }}
                    >
                      {t.formSuccessReset}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wide" style={{ color: '#A8B2C2' }}>{t.formName}</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder={t.formNamePlaceholder}
                          value={formData.name}
                          onChange={handleFormChange}
                          className="rounded-lg px-4 py-3 text-sm outline-none transition-all"
                          style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: colors.bg }}
                          onFocus={(e) => (e.target.style.border = `1px solid ${colors.accent}`)}
                          onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.15)')}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold tracking-wide" style={{ color: '#A8B2C2' }}>{t.formEmail}</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder={t.formEmailPlaceholder}
                          value={formData.email}
                          onChange={handleFormChange}
                          className="rounded-lg px-4 py-3 text-sm outline-none transition-all"
                          style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: colors.bg }}
                          onFocus={(e) => (e.target.style.border = `1px solid ${colors.accent}`)}
                          onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.15)')}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-wide" style={{ color: '#A8B2C2' }}>{t.formService}</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleFormChange}
                        className="rounded-lg px-4 py-3 text-sm outline-none transition-all appearance-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: formData.service ? colors.bg : '#7A8599' }}
                        onFocus={(e) => (e.target.style.border = `1px solid ${colors.accent}`)}
                        onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.15)')}
                      >
                        <option value="" disabled style={{ backgroundColor: colors.ink }}>{t.formServicePlaceholder}</option>
                        {t.formServiceOptions.map((opt) => (
                          <option key={opt.value} value={opt.value} style={{ backgroundColor: colors.ink }}>{opt.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold tracking-wide" style={{ color: '#A8B2C2' }}>{t.formMessage}</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder={t.formMessagePlaceholder}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="rounded-lg px-4 py-3 text-sm outline-none transition-all resize-none"
                        style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: colors.bg }}
                        onFocus={(e) => (e.target.style.border = `1px solid ${colors.accent}`)}
                        onBlur={(e) => (e.target.style.border = '1px solid rgba(255,255,255,0.15)')}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-lg font-semibold text-sm transition-all hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ backgroundColor: colors.accent, color: colors.bg }}
                    >
                      {formSubmitting ? t.formSubmitting : t.formSubmit}
                      {!formSubmitting && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M2 8h10m0 0l-3.5-3.5M12 8l-3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                    {formError && (
                      <p className="text-xs text-center mt-2" style={{ color: '#F87171' }}>{t.formError}</p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="px-5 md:px-8 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 py-10 border-t" style={{ borderColor: colors.border }}>
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-4">
                <LogoMark size={28} />
                <span className="text-lg font-bold" style={{ color: colors.ink }}>Summervibe Tech</span>
              </div>
              <p className="text-sm max-w-sm" style={{ color: colors.inkSoft }}>{t.footerTagline}</p>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.ink }}>{t.footerExplore}</h4>
              <ul className="space-y-2.5 text-sm">
                {t.navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} style={{ color: colors.inkSoft }}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <a href="#contact" className="text-xs font-bold tracking-widest uppercase" style={{ color: colors.ink }}>{t.footerConsult}</a>
              <p className="text-xs mt-1 mb-6" style={{ color: colors.inkMuted }}>{t.footerBookingNote}</p>
              <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: colors.ink }}>{t.footerContact}</h4>
              <ul className="space-y-2.5 text-sm" style={{ color: colors.inkSoft }}>
                <li><a href="mailto:contact@summervibe.tech">contact@summervibe.tech</a></li>
                <li><a href="mailto:support@summervibe.tech">support@summervibe.tech</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t flex flex-col gap-1 items-center text-center" style={{ borderColor: colors.border }}>
            <p className="text-xs" style={{ color: colors.inkMuted }}>{t.footerServices}</p>
            <p className="text-xs" style={{ color: colors.inkMuted }}>{t.footerCopyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
