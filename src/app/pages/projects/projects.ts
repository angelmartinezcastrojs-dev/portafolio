import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Project } from '../../core/models/project.interface';
import { projesctData } from '../../assets/data/projects.data';

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

  projects: Project[] = projesctData;

  selectedCategory: 'all' | 'personal' | 'professional' = 'all';

  get filteredProjects() {
    if (this.selectedCategory === 'all') return this.projects;
    return this.projects.filter(p => p.category === this.selectedCategory);
  }

  setCategory(category: 'all' | 'personal' | 'professional') {
    this.selectedCategory = category;
  }
}
