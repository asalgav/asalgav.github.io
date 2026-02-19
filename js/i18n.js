/**
 * Adrian Salas — Personal Portfolio
 * js/i18n.js — Bilingual content (English / Spanish)
 *
 * HOW TO EDIT:
 *   Each key maps to a selector or data-key attribute.
 *   Update the "en" and "es" strings to change your content.
 */

const translations = {

  /* ── META ── */
  pageTitle: {
    en: 'Adrián Salas — Software Engineer',
    es: 'Adrián Salas — Ingeniero de Software',
  },

  /* ── SIDEBAR ── */
  navRole: {
    en: 'Software Engineer',
    es: 'Ingeniero de Software',
  },
  navHome:       { en: 'Home',       es: 'Inicio'      },
  navAbout:      { en: 'About',      es: 'Sobre mí'    },
  navExperience: { en: 'Experience', es: 'Experiencia' },
  navSkills:     { en: 'Skills',     es: 'Habilidades' },
  navProjects:   { en: 'Projects',   es: 'Proyectos'   },
  navHobbies:    { en: 'Hobbies',    es: 'Pasiones'    },

  /* ── HERO ── */
  heroLabel:    { en: '01 — Welcome',                es: '01 — Bienvenido'                },
  heroStatus:   { en: 'Technical Lead — API Integration & Distributed Systems', es: 'Technical Lead — Integración de APIs y Sistemas Distribuidos' },
  heroHeading:  { en: 'Building <em>scalable</em><br>healthcare systems.',
                  es: 'Construyendo sistemas<br><em>escalables</em> para salud.' },
  heroTagline:  {
    en: "With over 15 years of experience in software engineering and technical leadership, I specialise in distributed systems, API integration, and high-performance messaging architectures in the healthcare sector.",
    es: 'Con más de 15 años de experiencia en ingeniería de software y liderazgo técnico, me especializo en sistemas distribuidos, integración de APIs y arquitecturas de mensajería de alto rendimiento en el sector sanitario.',
  },
  heroCta:      { en: 'Explore my work', es: 'Ver mi trabajo' },

  /* ── ABOUT ── */
  aboutLabel:   { en: '02 — About me', es: '02 — Sobre mí' },
  aboutHeading: {
    en: "Hello, I'm <em>Adrián Salas</em>.",
    es: 'Hola, soy <em>Adrián Salas</em>.',
  },
  aboutP1: {
    en: "Based in Málaga, Spain, I work at the intersection of software engineering and technical leadership. With over 15 years of experience, I specialise in managing technical teams and contributing to cloud computing strategies, with a focus on fostering collaboration, driving innovation, and ensuring high-quality software delivery.",
    es: 'Basado en Málaga, España, trabajo en la intersección de la ingeniería de software y el liderazgo técnico. Con más de 15 años de experiencia, me especializo en la gestión de equipos técnicos y en la contribución a estrategias de computación en la nube, fomentando la colaboración, impulsando la innovación y garantizando una entrega de software de alta calidad.',
  },
  aboutP2: {
    en: "Working in healthcare technology has given me a deep appreciation for the responsibility that comes with handling patient information. I place strong emphasis on code security, vulnerability management, and compliance — ensuring that every system we build meets the highest standards for data protection and patient safety. I'm also passionate about the performance and reliability of high-volume messaging systems.",
    es: 'Trabajar en tecnología sanitaria me ha dado una profunda conciencia de la responsabilidad que conlleva el manejo de información de pacientes. Concedo una gran importancia a la seguridad del código, la gestión de vulnerabilidades y el cumplimiento normativo. También me apasiona el rendimiento y la fiabilidad de los sistemas de mensajería de alto volumen.',
  },
  aboutStatus:  { en: 'Technical Lead', es: 'Technical Lead' },
  avatarAlt:    { en: 'Adrián Salas', es: 'Adrián Salas' },

  /* ── EXPERIENCE ── */
  expLabel:   { en: '03 — Experience', es: '03 — Experiencia'              },
  expHeading: { en: "Where I've <em>worked.</em>", es: 'Dónde he <em>trabajado.</em>' },
  expPresent: { en: 'Present',          es: 'Actualidad'                      },

  exp1Title: { en: 'Technical Lead — API Integration & Distributed Systems', es: 'Technical Lead — Integración de APIs y Sistemas Distribuidos' },
  exp1Desc: {
    en: 'Leading backend development for distributed systems and API-driven architectures in healthcare. Designing and governing RESTful APIs using OpenAPI specifications. Architecting messaging-based integrations using JMS and event-driven patterns. Ensuring high availability, scalability, and secure communication between services.',
    es: 'Liderando el desarrollo backend de sistemas distribuidos y arquitecturas basadas en APIs en el sector sanitario. Diseño y gobierno de APIs RESTful mediante especificaciones OpenAPI. Arquitectura de integraciones basadas en mensajería mediante JMS y patrones orientados a eventos. Garantía de alta disponibilidad, escalabilidad y comunicación segura entre servicios.',
  },
  exp2Title: { en: 'Senior Java Backend Engineer / Technical Lead & Scrum Master', es: 'Ingeniero Backend Java Senior / Technical Lead y Scrum Master' },
  exp2Desc: {
    en: 'Led and mentored a cross-functional engineering team while maintaining full hands-on development responsibilities. Designed high-availability microservices using Java and Spring Boot. Built integration layers using Apache Camel. Managed CI/CD pipelines in AWS environments. Designed custom Spring-based rule engines for critical healthcare workflows.',
    es: 'Liderazgo y mentoring de un equipo de ingeniería multidisciplinar manteniendo plenas responsabilidades de desarrollo. Diseño de microservicios de alta disponibilidad con Java y Spring Boot. Construcción de capas de integración con Apache Camel. Gestión de pipelines CI/CD en entornos AWS. Diseño de motores de reglas personalizados basados en Spring para flujos de trabajo clínicos críticos.',
  },
  exp3Title: { en: 'Java Backend Engineer / BPM Integration Specialist', es: 'Ingeniero Java Backend / Especialista en Integración BPM' },
  exp3Desc: {
    en: 'Designed and developed backend services using Java and Spring. Integrated enterprise systems using REST/SOAP Web Services. Worked on process automation and BPM-based solutions. Database modelling and optimisation (Oracle, PostgreSQL).',
    es: 'Diseño y desarrollo de servicios backend con Java y Spring. Integración de sistemas empresariales mediante servicios web REST/SOAP. Desarrollo de soluciones de automatización de procesos y basadas en BPM. Modelado y optimización de bases de datos (Oracle, PostgreSQL).',
  },
  exp4Title: { en: 'Java Developer Analyst', es: 'Analista Desarrollador Java' },
  exp4Desc: {
    en: 'Developed SOA-based enterprise applications for library management systems. Implemented search engines with Lucene/Solr. Designed JPA/Hibernate persistence layers. Worked in structured Agile environments.',
    es: 'Desarrollo de aplicaciones empresariales basadas en SOA para sistemas de gestión de bibliotecas. Implementación de motores de búsqueda con Lucene/Solr. Diseño de capas de persistencia con JPA/Hibernate. Trabajo en entornos Agile estructurados.',
  },

  /* ── SKILLS ── */
  skillsLabel:   { en: '04 — Technical Expertise',     es: '04 — Competencias Técnicas'   },
  skillsHeading: { en: 'My <em>toolkit.</em>', es: 'Mi <em>arsenal.</em>' },
  skillLang:     { en: 'Languages & Core',       es: 'Lenguajes y Base'          },
  skillFront:    { en: 'Integration & Messaging',        es: 'Integración y Mensajería'           },
  skillBack:     { en: 'Data & Infrastructure',  es: 'Datos e Infraestructura'    },
  skillInfra:    { en: 'Tools & Practices',  es: 'Herramientas y Prácticas'    },

  /* ── PROJECTS ── */
  projLabel:   { en: '05 — Projects & Contributions',          es: '05 — Proyectos y Contribuciones'             },
  projHeading: { en: "Things I've <em>built.</em>", es: 'Cosas que he <em>construido.</em>' },

  proj1Type: { en: 'Healthcare Systems',  es: 'Sistemas Sanitarios'  },
  proj1Desc: {
    en: 'High-availability microservices architecture for patient-facing and primary care applications, handling critical healthcare workflows with custom Spring-based rule engines.',
    es: 'Arquitectura de microservicios de alta disponibilidad para aplicaciones orientadas al paciente y de atención primaria, manejando flujos de trabajo clínicos críticos con motores de reglas personalizados basados en Spring.',
  },
  proj1Link: { en: 'Healthcare sector', es: 'Sector sanitario' },

  proj2Type: { en: 'API Integration Platform',  es: 'Plataforma de Integración de APIs' },
  proj2Desc: {
    en: 'RESTful API design and governance using OpenAPI specifications. Extending platform integrations with third-party providers and external enterprise clients in distributed healthcare environments.',
    es: 'Diseño y gobierno de APIs RESTful mediante especificaciones OpenAPI. Ampliación de integraciones de plataforma con proveedores externos y clientes empresariales en entornos sanitarios distribuidos.',
  },
  proj2Link: { en: 'Technical Lead work', es: 'Trabajo de Technical Lead' },

  proj3Type: { en: 'Messaging Architecture',  es: 'Arquitectura de Mensajería' },
  proj3Desc: {
    en: 'Event-driven integration systems using JMS, ActiveMQ, and Apache Camel. Building fault-tolerant architectures for high-volume clinical messaging with optimised throughput and minimal latency.',
    es: 'Sistemas de integración orientados a eventos usando JMS, ActiveMQ y Apache Camel. Construcción de arquitecturas tolerantes a fallos para mensajería clínica de alto volumen con rendimiento optimizado y latencia mínima.',
  },
  proj3Link: { en: 'Integration expertise', es: 'Experiencia en integración' },

  proj4Type: { en: 'CI/CD & Automation',  es: 'CI/CD y Automatización' },
  proj4Desc: {
    en: 'Automated deployment pipelines and service health monitoring using PowerShell scripting. Managing CI/CD workflows in AWS environments with Jenkins, ensuring reliable delivery of healthcare applications.',
    es: 'Pipelines de despliegue automatizado y monitorización de estado de servicios usando scripts PowerShell. Gestión de flujos CI/CD en entornos AWS con Jenkins, garantizando una entrega confiable de aplicaciones sanitarias.',
  },
  proj4Link: { en: 'DevOps practices', es: 'Prácticas DevOps' },

  /* ── HOBBIES ── */
  hobbiesLabel:   { en: '06 — Beyond code',   es: '06 — Más allá del código' },
  hobbiesHeading: { en: 'What I <em>love.</em>', es: 'Lo que me <em>apasiona.</em>' },

  hobby1Name: { en: 'Photography',  es: 'Fotografía'  },
  hobby1Desc: {
    en: 'Street and landscape photography. I see the world through light and shadow.',
    es: 'Fotografía callejera y de paisajes. Veo el mundo a través de la luz y la sombra.',
  },
  hobby2Name: { en: 'Triathlon', es: 'Triatlón' },
  hobby2Desc: {
    en: 'Swimming, cycling, and running. Training for and competing in triathlons keeps me disciplined and focused.',
    es: 'Natación, ciclismo y carrera. Entrenar y competir en triatlones me mantiene disciplinado y enfocado.',
  },
  hobby3Name: { en: 'Reading', es: 'Lectura' },
  hobby3Desc: {
    en: 'Sci-fi, essays, and anything about the philosophy of technology.',
    es: 'Ciencia ficción, ensayos y todo sobre la filosofía de la tecnología.',
  },
  hobby4Name: { en: 'Music', es: 'Música' },
  hobby4Desc: {
    en: 'Listening to music helps me focus and stay productive. A great playlist makes any task better.',
    es: 'Escuchar música me ayuda a concentrarme y ser más productivo. Una buena playlist mejora cualquier tarea.',
  },
  hobby5Name: { en: 'Travel', es: 'Viajes' },
  hobby5Desc: {
    en: 'Slow travel with a focus on local culture, food, and architecture.',
    es: 'Viajes lentos con enfoque en la cultura local, la gastronomía y la arquitectura.',
  },
  hobby6Name: { en: 'Tinkering', es: 'Cacharreo' },
  hobby6Desc: {
    en: 'Home automation, electronics, and building things with my hands.',
    es: 'Domótica, electrónica y construir cosas con las manos.',
  },
  hobby7Name: { en: 'Family', es: 'Familia' },
  hobby7Desc: {
    en: 'Spending time with my kids and wife. They give me the energy and strength to face any challenge.',
    es: 'Disfrutar del tiempo con mis hijos y mi mujer. Me dan la energía y la fuerza para afrontar cualquier reto.',
  },
  hobby8Name: { en: 'Hiking', es: 'Senderismo' },
  hobby8Desc: {
    en: 'At least once a month, a day trip hiking with an enthusiastic team I\'m proud to belong to.',
    es: 'Al menos una vez al mes, una ruta de senderismo con un equipo entusiasta al que me enorgullece pertenecer.',
  },

  /* ── FOOTER ── */
  footerCopy: {
    en: '© 2025 Adrián Salas. Built with intention.',
    es: '© 2025 Adrián Salas. Construido con intención.',
  },
};

export default translations;
