import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
})
export class Experience {
  experiences = [
    {
      company: 'Tech Solutions Inc.',
      role: 'Senior Full-Stack Developer',
      period: '2023 - Presente',
      description: 'Liderazgo en el desarrollo de aplicaciones web escalables utilizando Angular y Node.js. Optimización de procesos en servidores Linux.'
    },
    {
      company: 'Creative Web Studio',
      role: 'Frontend Developer',
      period: '2021 - 2023',
      description: 'Creación de interfaces de usuario modernas y responsivas. Implementación de animaciones complejas y mejora de la experiencia de usuario.'
    },
    {
      company: 'Data Dynamics',
      role: 'Junior Developer',
      period: '2019 - 2021',
      description: 'Mantenimiento de bases de datos y desarrollo de componentes internos para la gestión de datos masivos.'
    }
  ];
}
