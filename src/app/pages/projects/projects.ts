import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Personal Portfolio',
      description: 'A modern and interactive portfolio built with Angular and Tailwind CSS, featuring a unique card-based design and smooth animations.',
      techs: ['Angular', 'Tailwind CSS', 'TypeScript'],
      image: 'white.png',
      repoUrl: 'https://github.com/angelmartinezcastrojs-dev/portfolio',
      category: 'personal'
    },
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with product management, shopping cart, and secure checkout integration.',
      techs: ['Angular', 'Node.js', 'MongoDB'],
      image: 'white.png',
      repoUrl: 'https://github.com/angelmartinezcastrojs-dev/ecommerce',
      liveUrl: 'https://ecommerce-demo.com',
      category: 'personal'
    },
    {
      title: 'Internal ERP System',
      description: 'Developed a complex enterprise resource planning system to manage inventory, sales, and employee payroll for a large manufacturing company.',
      techs: ['Angular', 'Java Spring Boot', 'PostgreSQL', 'Linux'],
      image: 'white.png',
      category: 'professional',
      company: 'Tech Solutions Inc.'
    },
    {
      title: 'Healthcare Management Portal',
      description: 'Built a secure portal for healthcare providers to manage patient records, appointments, and billing, complying with data privacy standards.',
      techs: ['Angular', 'Firebase', 'Cloud Functions'],
      image: 'white.png',
      category: 'professional',
      company: 'HealthTech Global'
    }
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
