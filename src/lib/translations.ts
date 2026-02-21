export const translations = {
  "pt-BR": {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      skills: "Habilidades",
      contact: "Contato",
    },
    hero: {
      greeting: "Olá, eu sou",
      name: "Lucas Gomes",
      role: "Desenvolvedor Full Stack",
      description: "Transformando ideias em experiências digitais incríveis",
    },
    about: {
      title: "Sobre Mim",
      text: "Sou Desenvolvedor de Software autodidata e estou buscando minha primeira oportunidade na área de tecnologia. Trabalho com sites, landing pages, APIs REST e outros tipos de aplicações. Tenho experiência com projetos freelancer, projetos acadêmicos e projetos open source no GitHub, contribuindo atualmente nos repositórios do VsCode e Vite.",
      services: "Serviços",
      servicesList: [
        "Prototipação de novas aplicações",
        "Desenvolvimento de aplicações web completas",
        "Criação e testes de APIs RESTful",
        "Desenvolvimento de interfaces responsivas",
        "Auxílio na modelagem de bancos de dados",
        "Manuntenção em projetos já existentes ou legados",
      ],
      downloadCV: "Baixar Currículo",
    },
    projects: {
      title: "Projetos",
      viewMore: "Ver Mais",
      viewLess: "Ver Menos",
      viewProject: "Ver Projeto",
      tools: "Ferramentas",
      private: "Projeto privado",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologias que domino",
    },
    contact: {
      title: "Contato",
      subtitle: "Vamos trabalhar juntos?",
      name: "Nome Completo",
      email: "Email",
      phone: "Telefone",
      message: "Mensagem",
      send: "Enviar Mensagem",
      namePlaceholder: "Seu nome completo",
      emailPlaceholder: "seu@email.com",
      phonePlaceholder: "(00) 00000-0000",
      messagePlaceholder: "Escreva sua mensagem aqui...",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I am",
      name: "Lucas Gomes",
      role: "Full Stack Developer",
      description: "Transforming ideas into amazing digital experiences",
    },
    about: {
      title: "About Me",
      text: "I am a self-taught Software Developer seeking my first opportunity in the technology field. I work with websites, landing pages, REST APIs, and other types of applications. I have experience with freelance projects, academic projects, and open source projects on GitHub, currently contributing to the VsCode and Vite repositories.",
      services: "Services",
      servicesList: [
        "Prototyping new applications",
        "Complete web application development",
        "RESTful API creation and testing",
        "Responsive interface development",
        "Database modeling assistance",
        "Maintenance of existing or legacy projects",
      ],
      downloadCV: "Download Resume",
    },
    projects: {
      title: "Projects",
      viewMore: "View More",
      viewLess: "View Less",
      viewProject: "View Project",
      tools: "Tools",
      private: "Private project",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies I master",
    },
    contact: {
      title: "Contact",
      subtitle: "Let's work together?",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      message: "Message",
      send: "Send Message",
      namePlaceholder: "Your full name",
      emailPlaceholder: "your@email.com",
      phonePlaceholder: "+1 (000) 000-0000",
      messagePlaceholder: "Write your message here...",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Lucas Gomes",
      role: "Desarrollador Full Stack",
      description: "Transformando ideas en experiencias digitales increíbles",
    },
    about: {
      title: "Sobre Mí",
      text: "Soy Desarrollador de Software autodidacta y estoy buscando mi primera oportunidad en el área de tecnología. Trabajo con sitios web, landing pages, APIs REST y otros tipos de aplicaciones. Tengo experiencia con proyectos freelance, proyectos académicos y proyectos open source en GitHub, contribuyendo actualmente en los repositorios de VsCode y Vite.",
      services: "Servicios",
      servicesList: [
        "Prototipado de nuevas aplicaciones",
        "Desarrollo de aplicaciones web completas",
        "Creación y pruebas de APIs RESTful",
        "Desarrollo de interfaces responsivas",
        "Ayuda en el modelado de bases de datos",
        "Mantenimiento de proyectos existentes o legacy",
      ],
      downloadCV: "Descargar CV",
    },
    projects: {
      title: "Proyectos",
      viewMore: "Ver Más",
      viewLess: "Ver Menos",
      viewProject: "Ver Proyecto",
      tools: "Herramientas",
      private: "Proyecto privado",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías que domino",
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Trabajamos juntos?",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      message: "Mensaje",
      send: "Enviar Mensaje",
      namePlaceholder: "Tu nombre completo",
      emailPlaceholder: "tu@email.com",
      phonePlaceholder: "+34 000 000 000",
      messagePlaceholder: "Escribe tu mensaje aquí...",
    },
    footer: {
      rights: "Todos los derechos reservados.",
    },
  },
};

export const projectsData = {
  "pt-BR": [
    {
      title: "Site da PeuCar Automotivos",
      description:
        "Projeto freelance que desenvolvi para um pequeno negócio de oficina de automóveis.",
      tools: ["HTML5", "Sass", "Javascript", "NodeJs"],
      image: "/PeuCar-Website.png",
      link: "https://peucar-automotivos-ipira.vercel.app/",
    },
    {
      title: "Curriculum Generator",
      description:
        "Aplicativo web que foi feito para simular um MVP Micro-Saas. Permite ao usuário criar um currículo personalizado com base em suas informações profissionais.",
      tools: ["React", "JavaScript", "CSS3"],
      image: "Curriculum-Generator.png",
      link: "https://curriculum-generator-rho.vercel.app/redirect-page",
    },
    {
      title: "C.E.R.F (Cadastro Escolar com Reconhecimento Facial)",
      description:
        "Sistema de cadastro e autenticação biométrica facial para escolas. Possui o objetivo de reforçar a segurança bloqueando acesso não autorizado.",
      tools: ["React", "Javascript", "Typescript", "Express", "TailwindCSS"],
      image: "CERF.png",
      link: "#",
      isPrivate: true,
    },
    {
      title: "Curriculum Generator Saas Version",
      description:
        "Versão aprimorada do projeto Curriculum Generator, com edição de currículos salvos no app, suporte aos clientes, assinatura de planos e muito mais.",
      tools: ["NextJs", "Typescript", "TailwindCSS", "MongoDB"],
      image: "CG-Saas-Version.png",
      link: "https://curriculum-generator-saas-version.vercel.app/",
    },
    {
      title: "Jogo de Progressão Aritmética",
      description:
        "Jogo matemático simples que aborda o assunto progressão aritmética. Foi desenvolvido para apresentação em um trabalho escolar.",
      tools: ["HTML5", "CSS3", "Javascript"],
      image: "Progressao-Aritmetica.png",
      link: "https://jogo-matematico-de-progressao-aritm.vercel.app/",
    },
    {
      title: "Landing Page da FURIA",
      description:
        "Desafio técnico que realizei ao participar de um processo seletivo da organização de E-sports brasileira FURIA.",
      tools: ["React", "Javascript"],
      image: "ChatBot-da-FURIA.png",
      link: "https://landing-page-para-a-furia.vercel.app/",
    },
  ],
  en: [
    {
      title: "PeuCar Automotive Website",
      description:
        "Freelance project I developed for a small automotive workshop business.",
      tools: ["HTML5", "Sass", "Javascript", "NodeJs"],
      image: "/PeuCar-Website.png",
      link: "https://peucar-automotivos-ipira.vercel.app/",
    },
    {
      title: "Curriculum Generator",
      description:
        "Web application made to simulate a Micro-Saas MVP. Allows users to create a personalized resume based on their professional information.",
      tools: ["React", "JavaScript", "CSS3"],
      image: "Curriculum-Generator.png",
      link: "https://curriculum-generator-rho.vercel.app/redirect-page",
    },
    {
      title: "C.E.R.F (School Registration with Facial Recognition)",
      description:
        "Facial biometric registration and authentication system for schools. Aims to enhance security by blocking unauthorized access.",
      tools: ["React", "Javascript", "Typescript", "Express", "TailwindCSS"],
      image: "CERF.png",
      link: "#",
      isPrivate: true,
    },
    {
      title: "Curriculum Generator Saas Version",
      description:
        "Enhanced version of the Curriculum Generator project, with editing of saved resumes in the app, customer support, plan subscriptions and much more.",
      tools: ["NextJs", "Typescript", "TailwindCSS", "MongoDB"],
      image: "CG-Saas-Version.png",
      link: "https://curriculum-generator-saas-version.vercel.app/",
    },
    {
      title: "Arithmetic Progression Game",
      description:
        "Simple math game that addresses the topic of arithmetic progression. It was developed for presentation in a school project.",
      tools: ["HTML5", "CSS3", "Javascript"],
      image: "Progressao-Aritmetica.png",
      link: "https://jogo-matematico-de-progressao-aritm.vercel.app/",
    },
    {
      title: "FURIA Landing Page",
      description:
        "Technical challenge I completed while participating in a selection process for the Brazilian E-sports organization FURIA.",
      tools: ["React", "Javascript"],
      image: "ChatBot-da-FURIA.png",
      link: "https://landing-page-para-a-furia.vercel.app/",
    },
  ],
  es: [
    {
      title: "Sitio Web de PeuCar Automotriz",
      description:
        "Proyecto freelance que desarrollé para un pequeño negocio de taller automotriz.",
      tools: ["HTML5", "Sass", "Javascript", "NodeJs"],
      image: "/PeuCar-Website.png",
      link: "https://peucar-automotivos-ipira.vercel.app/",
    },
    {
      title: "Curriculum Generator",
      description:
        "Aplicación web hecha para simular un MVP Micro-Saas. Permite al usuario crear un currículum personalizado basado en su información profesional.",
      tools: ["React", "JavaScript", "CSS3"],
      image: "Curriculum-Generator.png",
      link: "https://curriculum-generator-rho.vercel.app/redirect-page",
    },
    {
      title: "C.E.R.F (Registro Escolar con Reconocimiento Facial)",
      description:
        "Sistema de registro y autenticación biométrica facial para escuelas. Tiene como objetivo reforzar la seguridad bloqueando el acceso no autorizado.",
      tools: ["React", "Javascript", "Typescript", "Express", "TailwindCSS"],
      image: "CERF.png",
      link: "#",
      isPrivate: true,
    },
    {
      title: "Curriculum Generator Versión Saas",
      description:
        "Versión mejorada del proyecto Curriculum Generator, con edición de currículums guardados en la app, soporte a clientes, suscripción de planes y mucho más.",
      tools: ["NextJs", "Typescript", "TailwindCSS", "MongoDB"],
      image: "CG-Saas-Version.png",
      link: "https://curriculum-generator-saas-version.vercel.app/",
    },
    {
      title: "Juego de Progresión Aritmética",
      description:
        "Simple juego matemático que aborda el tema de la progresión aritmética. Fue desarrollado para apresentação em um trabalho escolar.",
      tools: ["HTML5", "CSS3", "Javascript"],
      image: "Progressao-Aritmetica.png",
      link: "https://jogo-matematico-de-progressao-aritm.vercel.app/",
    },
    {
      title: "Landing Page de FURIA",
      description:
        "Desafío técnico que completé mientras participaba en un proceso de selección de la organización de E-sports brasileña FURIA.",
      tools: ["React", "Javascript"],
      image: "ChatBot-da-FURIA.png",
      link: "https://landing-page-para-a-furia.vercel.app/",
    },
  ],
};
