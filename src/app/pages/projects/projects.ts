import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  techs: string[];
  image: string;
  repoUrl?: string;
  liveUrl?: string;
  category: 'personal' | 'professional';
  company?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    FontAwesomeModule,
  ],
  templateUrl: './projects.html',
})
export class Projects {
  faGithub = faGithub;
  faExternalLinkAlt = faExternalLinkAlt;

  projects: Project[] = [
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
      techs: ['Angular', 'TypeScript', 'Jenkins', 'SonarQube', 'Jest.js','blackduck', 'jira', 'git', 'migrate', 'bootstrap', 'html', 'css', 'RXJs', 'Postman', 'clean architecture', 'Scrum', 'Kanban'],
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

  selectedCategory: 'all' | 'personal' | 'professional' = 'all';

  get filteredProjects() {
    if (this.selectedCategory === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: 'all' | 'personal' | 'professional') {
    this.selectedCategory = category;
  }
}
