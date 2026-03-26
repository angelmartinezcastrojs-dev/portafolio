import { Component } from '@angular/core';
import { Label } from '../../components/label/label';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

interface Tech {
  name: string;
  image?: string;
}

@Component({
  selector: 'app-about-me',
  imports: [Label, FontAwesomeModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {
  faEnvelope = faEnvelope;
  techs: Tech[] = [
    {
      name: 'Angular',
      image: 'https://icones.pro/wp-content/uploads/2022/07/icone-angulaire-originale-logo.png',
    },
    {
      name: 'React',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
      name: 'Node.js',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg',
    },
    {
      name: 'SQL',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Sql_data_base_with_logo.svg',
    },
    {
      name: 'Javascript',
      image: 'https://static.vecteezy.com/system/resources/previews/027/127/560/large_2x/javascript-logo-javascript-icon-transparent-free-png.png'
    },
    {
      name: 'Python',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    },
    {
      name: 'HTML',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
    },
    {
      name: 'CSS',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg',
    },
    {
      name: 'Git',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg',
    },
    {
      name: 'Typescript',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
    },
    {
      name: 'Ubuntu',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/UbuntuCoF.svg',
    },
    {
      name: 'AWS EC2',
      image: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*h78te1Nr-bUgqCtmFylC_g.png'
    },
  ];
}
