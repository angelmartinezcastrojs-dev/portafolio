import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contact.html',
})
export default class Contact {
  faEnvelope = faEnvelope;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;

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
      name: 'Email',
      url: 'mailto:angel.martinez.castrojs@gmail.com',
      icon: faEnvelope,
      color: '#ea4335'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/524981057112?text=Hola!%20Vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20colaborar%20contigo.',
      icon: faWhatsapp,
      color: '#00D466'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/agpicturesmx/',
      icon: faInstagram,
      color: '#E4405F'
    },
  ];

  sendEmail(name: string, subject: string, message: string) {
    const encodedSubject = encodeURIComponent(subject || 'New Contact from Portfolio');
    const body = `Name: ${name}\n\nMessage:\n${message}`;
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:angel.martinez.castrojs@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;
  }
}
