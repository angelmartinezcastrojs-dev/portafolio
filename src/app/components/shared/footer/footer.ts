import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    CommonModule, 
    FontAwesomeModule, 
    RouterLink,
  ],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();
  faHeart = faHeart;
  hideElement = true;

  constructor(private router: Router) {
    // Escuchamos los cambios de ruta
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      // Si la URL incluye 'contacto', ocultamos el elemento
      this.hideElement = !event.url.includes('/contact');
    });
  }
  
  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/angel-josu%C3%A9-mart%C3%ADnez-castro-3804121a9/',
      icon: faLinkedinIn,
      color: '#0077b5'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/angelmartinezcastrojs-dev',
      icon: faGithub,
      color: '#333'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/524981057112?text=Hola!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20colaborar%20contigo.',
      icon: faWhatsapp,
      color: '#25D366'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/agpicturesmx/',
      icon: faInstagram,
      color: '#E4405F'
    }
  ];
}
