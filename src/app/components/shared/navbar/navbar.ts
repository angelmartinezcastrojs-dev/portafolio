import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from "@angular/router";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHome, faBars, faTimes, faGlobe } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, FontAwesomeModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  faHome = faHome;
  faBars = faBars;
  faTimes = faTimes;
  faGlobe = faGlobe;

  isMenuOpen = signal(false);
  currentLang = signal<'EN' | 'ES'>('EN');

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  toggleLanguage() {
    this.currentLang.update(lang => lang === 'ES' ? 'EN' : 'ES');
    // Aquí podrías añadir lógica para un servicio de traducción real
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
