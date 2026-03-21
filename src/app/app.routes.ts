import { Routes } from '@angular/router';
import { AboutMe } from './pages/about-me/about-me';
import { Experience } from './pages/experience/experience';

export const routes: Routes = [
        {
            path: '',
            component: AboutMe
        },
        {
            path: 'experience',
            component: Experience
        }
    ];
