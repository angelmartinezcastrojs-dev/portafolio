import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes, faExternalLinkAlt, faCertificate } from '@fortawesome/free-solid-svg-icons';

import { Certificate } from '../../core/models/certificate.interface';


@Component({
  selector: 'app-certificate-modal',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './certificate-modal.html',
  styleUrl: './certificate-modal.css'
})
export class CertificateModal {
  @Input() isOpen = false;
  @Input() certificates: Certificate[] = [];
  @Output() close = new EventEmitter<void>();

  faTimes = faTimes;
  faExternalLinkAlt = faExternalLinkAlt;
  faCertificate = faCertificate;

  goToCertificate(url: string) {
    window.open(url, '_blank');
  }

  closeModal() {
    this.close.emit();
  }
}