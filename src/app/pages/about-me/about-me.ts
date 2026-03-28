import { Component, signal } from '@angular/core';
import { Label } from '../../components/label/label';
import { faEnvelope, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faAws } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterLink } from '@angular/router';
import { CertificateModal } from '../../components/certificate-modal/certificate-modal';
import { certificatesData } from '../../assets/data/certifications.data';
import { techsData } from '../../assets/data/techs.data';
import { institutionsData } from '../../assets/data/institutions.data';
import { Certificate } from '../../core/models/certificate.interface';
import { Tech } from '../../core/models/Tech.interface';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    Label, 
    FontAwesomeModule, 
    RouterLink, 
    CertificateModal
  ],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  faEnvelope = faEnvelope;
  faAws = faAws;
  faPlus = faPlus;
  
  isModalOpen = signal(false);

  certificates: Certificate[] = certificatesData;
  institutions = institutionsData;
  techs: Tech[] = techsData;

  openModal() {
    this.isModalOpen.set(true);
  }

  closeModal() {
    this.isModalOpen.set(false);
  }
}
