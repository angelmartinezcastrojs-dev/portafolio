import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();
  faHeart = faHeart;
  
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
      url: 'https://wa.me/524981057112',
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
