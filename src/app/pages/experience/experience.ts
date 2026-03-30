import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceInterface } from '../../core/models/experience.interface';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
})
export class Experience {
  experiences: ExperienceInterface[] = [
    {
      company: 'IDS Comercial-TI',
      role: 'Data Engineer Trainee',
      period: 'Sept 2025 - Dec 2025',
      description: [
        '•	Deployed and configured backend applications on AWS EC2 instances, managing cloud infrastructure and ensuring high service availability.',
        '•	Administered remote Ubuntu Server environments via SSH, executing essential command-line operations for system maintenance, file management, and security.',
        '•	Engineered modular and maintainable code using Python, leveraging Object-Oriented Programming (OOP) principles and virtual environments to streamline the development lifecycle.',
        '•	Optimized data retrieval by designing advanced PostgreSQL queries, implementing complex joins and indexing strategies to improve database performance.',
        '•	Architected end-to-end development workflows, from local environment setup to production-ready cloud deployment.',
      ],
      image: '' // Usando la imagen existente como placeholder
    },
    {
      company: 'IDS Comercial-TI',
      role: 'Software Engineer',
      period: 'Jul 2024 - Sep 2025',
      description: [
        '•	Engineered high-availability environments for UAT and Production, achieving 80% code coverage through automated testing and rigorous validation logic.',
        '•	Restructured system architecture using Clean Architecture and MVC patterns, improving backend communication efficiency and code scalability.',
        '•	Optimized CI/CD pipelines by resolving SonarQube and Jenkins integration issues, ensuring high standards for automated deployments and code quality.',
        '•	Led technical coordination for a team of three, managing sprint lifecycles in Jira and aligning technical requirements with business stakeholders.',
        '•	Developed complex data consumption layers using RxJS to manage asynchronous data streams and RESTful API integration.',
        '•	Authored comprehensive technical documentation, including system flow diagrams and architectural blueprints to standardize development workflows.',
        '•	Managed core library migrations and dependency updates, ensuring system security and compatibility across multiple environments.',

      ],
      image: ''
    },
    {
      company: 'YoContigo-TI',
      role: 'Full-Stack Developer',
      period: 'Mar 2023 - May 2024 | Gudalajara, Jal.',
      description: [
        '•	Architected and deployed end-to-end web applications, managing the full development lifecycle from database design to frontend implementation.',
        '•	Analyzed complex business requirements to engineer scalable technical solutions, ensuring alignment with client needs and system performance goals.',
        '•	Optimized legacy systems through strategic maintenance and updates, reducing technical debt and improving application stability by [X]% (o "significantly").',
        '•	Executed comprehensive system testing and debugging protocols, identifying root causes of critical issues to ensure high-quality production releases.',
        '•	Leveraged data analysis to identify system bottlenecks, proposing and implementing architectural improvements that enhanced user experience and operational efficiency.',
        '•	Collaborated in Agile interdisciplinary teams, contributing to large-scale development projects and facilitating technical communication across departments.',
        '•	Designed and integrated RESTful services, ensuring seamless communication between client-side interfaces and backend data structures.'
      ],
      image: 'yocontigo2.jpeg'
    },
    {
      company: 'Informatica consultores TI',
      role: 'Junior Software Engineer',
      period: 'Feb 2022 - Oct 2022  | Río grande, Zac.',
      description: [
        '•	Maintained and enhanced high-traffic web applications, ensuring optimal performance and cross-browser compatibility through modular code updates.',
        '•	Identified and resolved critical software bugs and frontend inconsistencies, implementing corrective solutions that improved overall system reliability.',
        '•	Executed comprehensive software testing protocols to validate UI/UX functionality and backend integration before production deployments.',
        '•	Collaborated within cross-functional teams to align technical development with project milestones and client requirements.',
        '•	Participated in client discovery meetings, providing technical insights to translate business needs into actionable frontend features.',
      ],
      image: 'itszn.jpeg'
    }
  ];

  downloadResume() {
    window.open('resume/Angel_Martinez_Software_Engineer.pdf', '_blank');
  }
}
