import { Project } from "../../core/models/project.interface";

export const projesctData: Project[] = [
  {
    title: 'App de gifs',
    description: 'A app where you can get funny gifs using the Giphy API',
    techs: ['Angular 20', 'Tailwind CSS', 'lazy loading', 'signals angular', 'computed', 'effects angular', 'TypeScript', 'HTML5', 'Trae', 'Git', 'GitHub'],
    image: 'projects-images/gifs-app.png',
    liveUrl: 'https://funny-gifs-kappa.vercel.app/dashboard/trending',
    repoUrl: 'https://github.com/angelmartinezcastrojs-dev/gifsa-app-angular20',
    category: 'personal'
  },
  {
    title: 'Agenda Noxit',
    description: 'A modern Web where you can get appointments with professional services. (psicologist, doctor, etc.)',
    techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Javascript', 'HTML5', 'Trae', 'Git', 'GitHub'],
    image: 'projects-images/noxit.png',
    liveUrl: 'https://noxit.net/agenda/fotografoangel',
    category: 'professional'
  },
  {
    title: 'Personal Portfolio',
    description: 'A modern and interactive portfolio built with Angular and Tailwind CSS, featuring a unique card-based design and smooth animations.',
    techs: ['Angular 20', 'Tailwind CSS', 'TypeScript', 'HTML5', 'Trae', 'Git', 'GitHub'],
    image: 'projects-images/portafolio.png',
    repoUrl: 'https://github.com/angelmartinezcastrojs-dev/portafolio',
    category: 'personal'
  },
  {
    title: 'Pensiones Citi',
    description: `Developed an internal ticketing system for Citi Bank with granular access control and full service lifecycle tracking. Integrated Fujitsu scanners and digital tablets to automate document digitization and e-signatures, enhancing operational security.`,
    techs: ['Angular', 'TypeScript', 'Jenkins', 'SonarQube', 'Jest.js', 'blackduck', 'jira', 'git', 'migrate', 'bootstrap', 'html', 'css', 'RXJs', 'Postman', 'clean architecture', 'Scrum', 'Kanban'],
    image: 'projects-images/citi.png',
    category: 'professional',
    company: 'Citi'
  },
  {
    title: 'Sereno Studio',
    description: 'Developed a high-impact landing page for a music studio featuring artist bios, service catalogs, and integrated media players. Implemented a professional portfolio section to showcase high-fidelity audio samples and video projects, driving client engagement and bookings.',
    techs: ['JavaScript', 'Css', 'HTML5', 'Trae', 'Git', 'GitHub', 'GitSites'],
    image: 'projects-images/sereno-studio.png',
    repoUrl: 'https://github.com/AngelouzCastro/serenoStudio',
    liveUrl: 'https://angelouzcastro.github.io/serenoStudio/#',
    category: 'personal',
    company: 'Sereno Studio'
  },
  {
    title: 'HipoTK',
    description: 'Designed a comprehensive real-time real estate platform featuring a dynamic property catalog and automated price estimation tools. Integrated lead generation forms to connect potential buyers directly with agencies, simplifying the property inquiry and viewing process.',
    techs: ['Angular 15', 'Express.js', 'Ionic 3', 'HTML', 'CSS', 'Java', 'swift', 'Git', 'BitBucket', 'Notion'],
    image: 'projects-images/hipoTK.png',
    liveUrl: 'https://www.hipotk.com/',
    category: 'professional',
    company: 'HipoTK'
  },
  {
    title: 'BoletosEnLinea.com',
    description: 'Engineered a real-time ticketing platform for Soles de Baja California with interactive seat selection and dynamic availability. Built a streamlined checkout workflow for basketball games and local events, ensuring a secure and user-friendly purchasing experience.',
    techs: ['Angular', 'Iocnic', 'Android', 'html', 'css'],
    image: 'projects-images/boletera.png',
    category: 'professional',
    company: 'Yo Contigo TI',
    liveUrl: 'https://boletosenlinea.com/',
  },
  {
    title: 'Pethome',
    description: `Built a marketplace connecting pet owners with local sitters through a real-time matching, booking, and messaging engine. Designed a comprehensive profile and review system to facilitate trust and coordination between users across the platform.`,
    techs: ['React Native', 'Express.js', 'Cloud Functions', 'Angular', 'Tailwind Css', 'clean architecture'],
    image: 'projects-images/pethome2.jpg',
    category: 'professional',
    company: 'Pethome Yo Contigo Ti'
  },
];